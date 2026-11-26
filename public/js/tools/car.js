(function () {
    'use strict';

    const { Calculators, Units, UI, Receipt, currencyDigits, formatCurrency, formatInteger, t } = window.CostSimulators;

    const EMPTY_VALUE = '—';
    const MPG_TIMES_L_PER_100KM = (100 * Units.LITERS_PER_GALLON) / Units.KM_PER_MILE;

    function priceStep(value) {
        const radio = document.querySelector('input[name="unit"][value="' + value + '"]');
        return parseFloat(radio && radio.dataset.priceStep) || 0.1;
    }

    const UNITS = {
        metric: {
            distance: t('unit.metric.distance'),
            consumption: t('unit.metric.consumption'),
            price: t('unit.metric.price'),
            perLabel: t('unit.metric.perLabel'),
            perDistance: t('unit.metric.perDistance'),
            consumptionStep: 0.5,
            priceStep: priceStep('metric')
        },
        us: {
            distance: t('unit.us.distance'),
            consumption: t('unit.us.consumption'),
            price: t('unit.us.price'),
            perLabel: t('unit.us.perLabel'),
            perDistance: t('unit.us.perDistance'),
            consumptionStep: 1,
            priceStep: priceStep('us')
        }
    };

    const FIXED_FIELDS = [
        { id: 'depreciation', perYear: 12 },
        { id: 'insurance', perYear: 1 },
        { id: 'maintenance', perYear: 1 },
        { id: 'parking', perYear: 12 }
    ];

    function readLabel(id) {
        const label = document.querySelector('label[for="' + id + '"]');
        return label ? label.textContent.trim() : id;
    }

    const fixedCosts = FIXED_FIELDS.map(function (field) {
        return {
            id: field.id,
            input: document.getElementById(field.id),
            name: readLabel(field.id),
            perYear: field.perYear
        };
    });

    const els = {
        distance: document.getElementById('distance'),
        consumption: document.getElementById('consumption'),
        fuelPrice: document.getElementById('fuelPrice'),
        distanceUnit: document.getElementById('distanceUnit'),
        consumptionUnit: document.getElementById('consumptionUnit'),
        fuelPriceUnit: document.getElementById('fuelPriceUnit'),
        consumptionHint: document.getElementById('consumptionHint'),
        perDistanceLabel: document.getElementById('perDistanceLabel'),
        breakdown: document.getElementById('breakdown'),
        copy: document.getElementById('copyBtn'),
        panel: document.getElementById('resultPanel'),
        note: document.getElementById('resultNote'),
        invest: document.getElementById('invest'),
        receipt: document.getElementById('receiptBtn'),
        results: {
            month: document.getElementById('month'),
            year: document.getElementById('year'),
            perDistance: document.getElementById('perDistance'),
            year10: document.getElementById('year10')
        }
    };

    let unit = 'metric';

    function round(value, digits) {
        return Number(value.toFixed(digits));
    }

    function setValue(input, value) {
        input.value = String(value);
        input.dispatchEvent(new Event('input', { bubbles: true }));
    }

    function applyUnitLabels() {
        const labels = UNITS[unit];
        els.distanceUnit.textContent = labels.distance;
        els.consumptionUnit.textContent = labels.consumption;
        els.fuelPriceUnit.textContent = labels.price;
        els.perDistanceLabel.textContent = labels.perLabel;
        els.consumption.closest('[data-stepper]').dataset.step = labels.consumptionStep;
        els.fuelPrice.closest('[data-stepper]').dataset.step = labels.priceStep;
        els.consumptionHint.hidden = unit !== 'metric';
    }

    function convertValues(from, to) {
        if (from === to) return;
        const toUs = to === 'us';
        const distance = UI.readNumber(els.distance);
        const consumption = UI.readNumber(els.consumption);
        const price = UI.readNumber(els.fuelPrice);

        if (distance > 0) {
            const converted = toUs ? distance / Units.KM_PER_MILE : distance * Units.KM_PER_MILE;
            const rounded = converted >= 500 ? Math.round(converted / 100) * 100 : Math.round(converted);
            setValue(els.distance, rounded);
        }
        if (consumption > 0) {
            setValue(els.consumption, round(MPG_TIMES_L_PER_100KM / consumption, 1));
        }
        if (price > 0) {
            setValue(els.fuelPrice, round(toUs ? price * Units.LITERS_PER_GALLON : price / Units.LITERS_PER_GALLON, currencyDigits));
        }
    }

    function readState() {
        const distance = UI.readNumber(els.distance);
        const consumption = UI.readNumber(els.consumption);
        const fuelPrice = UI.readNumber(els.fuelPrice);
        const fuelPerDistance = consumption > 0 ? Calculators.fuelPerDistance(consumption, unit) : 0;
        const yearlyFuel = distance > 0 && consumption > 0 && fuelPrice > 0
            ? distance * fuelPerDistance * fuelPrice
            : 0;

        const fuelItem = {
            id: 'fuel',
            name: t('fuelName'),
            value: yearlyFuel / 12,
            perYear: 12,
            yearly: yearlyFuel
        };

        const items = [fuelItem].concat(fixedCosts.map(function (cost) {
            const value = UI.readNumber(cost.input);
            return {
                id: cost.id,
                name: cost.name,
                value: value,
                perYear: cost.perYear,
                yearly: value * cost.perYear
            };
        }));

        const nonNegative = distance >= 0 && consumption >= 0 && fuelPrice >= 0 && fixedCosts.every(function (cost) {
            return UI.readNumber(cost.input) >= 0;
        });
        const active = items.filter(function (item) {
            return item.yearly > 0;
        });
        const yearly = active.reduce(function (sum, item) {
            return sum + item.yearly;
        }, 0);

        return {
            distance: distance,
            items: items,
            active: active,
            yearly: yearly,
            valid: nonNegative && yearly > 0
        };
    }

    function renderBreakdown(sorted, total) {
        const largest = sorted.length ? sorted[0].yearly : 0;
        const fragment = document.createDocumentFragment();

        sorted.forEach(function (item) {
            const entry = document.createElement('li');
            const head = document.createElement('div');
            const name = document.createElement('span');
            const value = document.createElement('span');
            const bar = document.createElement('div');
            const fill = document.createElement('span');

            head.className = 'breakdown-head';
            name.className = 'breakdown-name';
            value.className = 'breakdown-value';
            bar.className = 'breakdown-bar';
            name.textContent = item.name;
            value.textContent = t('breakdown', {
                cost: formatCurrency(item.yearly),
                percent: formatInteger((item.yearly / total) * 100)
            });
            fill.style.width = ((item.yearly / largest) * 100).toFixed(1) + '%';

            head.append(name, value);
            bar.append(fill);
            entry.append(head, bar);
            fragment.append(entry);
        });

        els.breakdown.replaceChildren(fragment);
    }

    function update() {
        const state = readState();

        els.panel.dataset.empty = String(!state.valid);
        els.copy.hidden = !state.valid;
        els.receipt.disabled = !state.valid;

        if (!state.valid) {
            Object.values(els.results).forEach(function (element) {
                UI.clearNumber(element, EMPTY_VALUE);
            });
            els.breakdown.replaceChildren();
            UI.showInvested(els.invest, 0);
            els.note.textContent = t('note.empty');
            return;
        }

        const yearly = state.yearly;
        const sorted = state.active.slice().sort(function (a, b) {
            return b.yearly - a.yearly;
        });

        UI.animateNumber(els.results.month, yearly / 12, formatCurrency);
        UI.animateNumber(els.results.year, yearly, formatCurrency);
        UI.animateNumber(els.results.year10, yearly * 10, formatCurrency);

        if (state.distance > 0) {
            UI.animateNumber(els.results.perDistance, yearly / state.distance, formatCurrency);
        } else {
            UI.clearNumber(els.results.perDistance, EMPTY_VALUE);
        }

        UI.showInvested(els.invest, yearly);
        renderBreakdown(sorted, yearly);

        const biggest = sorted[0];
        const day = formatCurrency(yearly / Units.DAYS_PER_YEAR);
        els.note.textContent = sorted.length === 1
            ? t('note.single', { name: biggest.name, cost: formatCurrency(yearly), day: day })
            : t('note.biggest', {
                name: biggest.name,
                cost: formatCurrency(biggest.yearly),
                percent: formatInteger((biggest.yearly / yearly) * 100),
                day: day
            });
    }

    function buildSummary() {
        const state = readState();
        if (!state.valid) return '';

        const sorted = state.active.slice().sort(function (a, b) {
            return b.yearly - a.yearly;
        });
        const lines = sorted.map(function (item) {
            return t('summary.item', {
                name: item.name,
                cost: formatCurrency(item.yearly),
                percent: formatInteger((item.yearly / state.yearly) * 100)
            });
        });

        lines.push('');
        lines.push(t('summary.total', {
            month: formatCurrency(state.yearly / 12),
            year: formatCurrency(state.yearly),
            year10: formatCurrency(state.yearly * 10)
        }));

        if (state.distance > 0) {
            lines.push(t('summary.perDistance', {
                distance: UNITS[unit].perDistance,
                cost: formatCurrency(state.yearly / state.distance)
            }));
        }

        lines.push(t('share.calculatedWith'));
        return lines.join('\n');
    }

    function readReceipt() {
        const state = readState();
        if (!state.valid) return null;

        const charges = [];
        state.active.forEach(function (item, order) {
            const count = item.perYear;
            for (let i = 0; i < count; i++) {
                charges.push({ at: i / count, order: order, label: item.name, amount: item.value });
            }
        });
        charges.sort(function (a, b) {
            return a.at - b.at || a.order - b.order;
        });

        return {
            item: t('receiptItem'),
            lines: charges,
            values: {
                perMonth: formatCurrency(state.yearly / 12),
                perYear: formatCurrency(state.yearly)
            }
        };
    }

    UI.bindSteppers(document);

    const unitChoice = UI.bindChoice('unit', 'u', function (next) {
        const previous = unit;
        unit = next;
        convertValues(previous, next);
        applyUnitLabels();
        update();
    });

    unit = unitChoice.value() || 'metric';
    applyUnitLabels();

    const urlState = UI.bindURLState({
        distance: 'd',
        consumption: 'c',
        fuelPrice: 'fp',
        depreciation: 'dep',
        insurance: 'ins',
        maintenance: 'm',
        parking: 'p'
    }, update);

    UI.bindShare(document.getElementById('shareBtn'), urlState.flush);

    els.copy.addEventListener('click', function () {
        const summary = buildSummary();
        if (summary) UI.copyWithFeedback(els.copy, summary, t('share.copied'));
    });

    Receipt.bind({ button: els.receipt, dialog: document.getElementById('receiptDialog'), read: readReceipt });
})();
