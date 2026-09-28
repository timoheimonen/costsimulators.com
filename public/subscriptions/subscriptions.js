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

    const { Calculators, Units, UI, formatCurrency, formatInteger } = window.CostSimulators;

    const URL_KEY = 's';
    const URL_SEPARATOR = '*';
    const URL_WRITE_DELAY_MS = 250;
    const MAX_ITEMS = 50;
    const MAX_NAME_LENGTH = 40;
    const EMPTY_VALUE = '—';
    const CYCLE_LABELS = { monthly: 'month', yearly: 'year', weekly: 'week' };
    const CYCLE_CODES = { monthly: 'm', yearly: 'y', weekly: 'w' };
    const EXAMPLES = [
        { name: 'Video streaming', price: '15.49', cycle: 'monthly' },
        { name: 'Music streaming', price: '11.99', cycle: 'monthly' },
        { name: 'Gym', price: '39.99', cycle: 'monthly' }
    ];

    const els = {
        list: document.getElementById('subList'),
        template: document.getElementById('subRowTemplate'),
        empty: document.getElementById('emptyState'),
        add: document.getElementById('addBtn'),
        quickAdd: document.getElementById('quickAdd'),
        breakdown: document.getElementById('breakdown'),
        copy: document.getElementById('copyBtn'),
        panel: document.getElementById('resultPanel'),
        note: document.getElementById('resultNote'),
        results: {
            year: document.getElementById('year'),
            month: document.getElementById('month'),
            day: document.getElementById('day'),
            year10: document.getElementById('year10')
        }
    };

    function sanitize(item) {
        const source = item && typeof item === 'object' ? item : {};
        const price = parseFloat(source.price);
        return {
            name: typeof source.name === 'string' ? source.name.slice(0, MAX_NAME_LENGTH) : '',
            price: Number.isFinite(price) && price >= 0 ? String(price) : '',
            cycle: Object.prototype.hasOwnProperty.call(CYCLE_LABELS, source.cycle) ? source.cycle : 'monthly'
        };
    }

    function encode(item) {
        return [item.name, item.price, CYCLE_CODES[item.cycle]].join(URL_SEPARATOR);
    }

    function decode(entry) {
        const parts = entry.split(URL_SEPARATOR);
        if (parts.length < 3) return null;

        const code = parts.pop();
        const price = parts.pop();
        const cycle = Object.keys(CYCLE_CODES).find(function (key) {
            return CYCLE_CODES[key] === code;
        });

        return sanitize({ name: parts.join(URL_SEPARATOR), price: price, cycle: cycle });
    }

    function load() {
        const entries = new URLSearchParams(window.location.search).getAll(URL_KEY);
        if (!entries.length) return EXAMPLES;
        return entries.map(decode).filter(Boolean).slice(0, MAX_ITEMS);
    }

    let pendingWrite = null;

    function writeURL() {
        clearTimeout(pendingWrite);
        pendingWrite = null;
        const params = {};
        params[URL_KEY] = collect().map(encode);
        UI.writeParams(params);
    }

    function rows() {
        return Array.from(els.list.querySelectorAll('.sub-row'));
    }

    function collect() {
        return rows().map(function (row) {
            return sanitize({
                name: row.querySelector('.sub-name').value,
                price: row.querySelector('.sub-price').value,
                cycle: row.querySelector('.sub-cycle').value
            });
        });
    }

    function priced(items) {
        return items.map(function (item) {
            const price = parseFloat(item.price) || 0;
            return {
                name: item.name.trim() || 'Untitled',
                price: price,
                cycle: item.cycle,
                yearly: Calculators.yearlyFromBilling(price, item.cycle)
            };
        }).filter(function (item) {
            return item.yearly > 0;
        });
    }

    function renderBreakdown(items, total) {
        const sorted = items.slice().sort(function (a, b) {
            return b.yearly - a.yearly;
        });
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
            value.textContent = formatCurrency(item.yearly) + ' / year · ' + formatInteger((item.yearly / total) * 100) + '%';
            fill.style.width = ((item.yearly / largest) * 100).toFixed(1) + '%';

            head.append(name, value);
            bar.append(fill);
            entry.append(head, bar);
            fragment.append(entry);
        });

        els.breakdown.replaceChildren(fragment);
    }

    function render(items) {
        els.empty.hidden = items.length > 0;
        els.add.disabled = items.length >= MAX_ITEMS;

        rows().forEach(function (row, index) {
            const name = items[index].name.trim();
            row.querySelector('.sub-remove').setAttribute('aria-label', 'Remove ' + (name || 'subscription'));
        });

        const active = priced(items);
        const total = active.reduce(function (sum, item) {
            return sum + item.yearly;
        }, 0);
        const valid = total > 0;

        els.panel.dataset.empty = String(!valid);
        els.copy.hidden = !valid;

        if (!valid) {
            Object.values(els.results).forEach(function (element) {
                UI.clearNumber(element, EMPTY_VALUE);
            });
            els.breakdown.replaceChildren();
            els.note.textContent = 'Add a subscription with a price to see the totals.';
            return;
        }

        UI.animateNumber(els.results.year, total, formatCurrency);
        UI.animateNumber(els.results.month, total / 12, formatCurrency);
        UI.animateNumber(els.results.day, total / Units.DAYS_PER_YEAR, formatCurrency);
        UI.animateNumber(els.results.year10, total * 10, formatCurrency);
        renderBreakdown(active, total);

        const biggest = active.reduce(function (top, item) {
            return item.yearly > top.yearly ? item : top;
        });
        els.note.textContent = active.length === 1
            ? 'That’s ' + formatCurrency(total) + ' a year for ' + biggest.name + '.'
            : 'Your biggest cost is ' + biggest.name + ' at ' + formatCurrency(biggest.yearly) + ' a year, ' +
            formatInteger((biggest.yearly / total) * 100) + '% of the total.';
    }

    function handleChange() {
        render(collect());
        clearTimeout(pendingWrite);
        pendingWrite = setTimeout(writeURL, URL_WRITE_DELAY_MS);
    }

    function createRow(item) {
        const row = els.template.content.firstElementChild.cloneNode(true);
        row.querySelector('.sub-name').value = item.name;
        row.querySelector('.sub-price').value = item.price;
        row.querySelector('.sub-cycle').value = item.cycle;
        return row;
    }

    function addItem(item, focusName) {
        if (rows().length >= MAX_ITEMS) return;
        const row = createRow(sanitize(item));
        els.list.append(row);
        handleChange();
        if (focusName) row.querySelector('.sub-name').focus();
    }

    function removeRow(row) {
        const next = row.nextElementSibling || row.previousElementSibling;
        row.remove();
        handleChange();
        (next ? next.querySelector('.sub-name') : els.add).focus();
    }

    function buildSummary() {
        const active = priced(collect());
        const total = active.reduce(function (sum, item) {
            return sum + item.yearly;
        }, 0);
        const lines = active.map(function (item) {
            return item.name + ' – ' + formatCurrency(item.price) + ' / ' + CYCLE_LABELS[item.cycle];
        });

        return lines.concat([
            '',
            'Total: ' + formatCurrency(total / 12) + ' per month, ' + formatCurrency(total) + ' per year',
            'Calculated with costsimulators.com'
        ]).join('\n');
    }

    els.list.addEventListener('input', handleChange);
    els.list.addEventListener('change', handleChange);

    els.list.addEventListener('click', function (event) {
        const button = event.target.closest('.sub-remove');
        if (button) removeRow(button.closest('.sub-row'));
    });

    els.add.addEventListener('click', function () {
        addItem({ name: '', price: '', cycle: 'monthly' }, true);
    });

    els.quickAdd.addEventListener('click', function (event) {
        const chip = event.target.closest('[data-name]');
        if (chip) addItem({ name: chip.dataset.name, price: chip.dataset.price, cycle: 'monthly' }, false);
    });

    UI.bindShare(document.getElementById('shareBtn'), writeURL);

    els.copy.addEventListener('click', function () {
        UI.copyWithFeedback(els.copy, buildSummary(), 'Copied!');
    });

    const initial = load();
    els.list.append.apply(els.list, initial.map(createRow));
    render(collect());
})();
