/*
MIT License

Copyright (c) 2026 Timo Heimonen <timo.heimonen@proton.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

(function () {
    'use strict';

    const { Calculators, Units, UI, formatCurrency, formatInteger, t } = window.CostSimulators;

    const EMPTY_VALUE = '—';
    const MAX_YEARS = 100;
    const PER_YEAR = { week: Units.WEEKS_PER_YEAR, month: 12, year: 1 };
    const UNITS = { week: t('unit.week'), month: t('unit.month'), year: t('unit.year') };

    const els = {
        price: document.getElementById('price'),
        resale: document.getElementById('resale'),
        uses: document.getElementById('uses'),
        usesUnit: document.getElementById('usesUnit'),
        years: document.getElementById('years'),
        panel: document.getElementById('resultPanel'),
        note: document.getElementById('resultNote'),
        results: {
            perUse: document.getElementById('perUse'),
            totalUses: document.getElementById('totalUses'),
            month: document.getElementById('month'),
            year: document.getElementById('year')
        }
    };

    let period = 'week';

    function applyPeriod() {
        els.usesUnit.textContent = UNITS[period];
    }

    // Switching between uses a week, a month and a year keeps the total the
    // same: 3 times a week becomes 13 times a month.
    function convertUses(from, to) {
        const uses = UI.readNumber(els.uses);
        if (from === to || !(uses > 0)) return;

        const converted = (uses * PER_YEAR[from]) / PER_YEAR[to];
        els.uses.value = String(Number(converted.toFixed(1)));
        els.uses.dispatchEvent(new Event('input', { bubbles: true }));
    }

    function update() {
        const price = UI.readNumber(els.price);
        const resale = UI.readNumber(els.resale);
        const uses = UI.readNumber(els.uses);
        const years = UI.readNumber(els.years);
        const totalUses = uses * PER_YEAR[period] * years;
        const valid = price > 0 && resale >= 0 && resale < price && uses > 0 && years > 0 && years <= MAX_YEARS && totalUses >= 1;

        els.panel.dataset.empty = String(!valid);

        if (!valid) {
            Object.values(els.results).forEach(function (element) {
                UI.clearNumber(element, EMPTY_VALUE);
            });
            els.note.textContent = t('note.empty');
            return;
        }

        const cost = price - resale;
        const yearly = cost / years;
        const nextYear = Calculators.costPerUse(price, resale, uses * PER_YEAR[period] * (years + 1));

        UI.animateNumber(els.results.perUse, Calculators.costPerUse(price, resale, totalUses), formatCurrency);
        UI.animateNumber(els.results.totalUses, totalUses, formatInteger);
        UI.animateNumber(els.results.month, yearly / 12, formatCurrency);
        UI.animateNumber(els.results.year, yearly, formatCurrency);

        els.note.textContent = t('note.result', { next: formatCurrency(nextYear) });
    }

    UI.bindSteppers(document);

    const periodChoice = UI.bindChoice('period', 'per', function (next) {
        const previous = period;
        period = next;
        applyPeriod();
        convertUses(previous, next);
        update();
    });

    period = periodChoice.value() || 'week';
    applyPeriod();

    const urlState = UI.bindURLState({ price: 'price', uses: 'u', years: 'y', resale: 'rs' }, update);
    UI.bindShare(document.getElementById('shareBtn'), urlState.flush);
    UI.bindPresets(document);
})();
