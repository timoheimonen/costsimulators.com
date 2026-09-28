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

    const { Calculators, UI, formatCurrency, formatNumber, formatWorkTime, t } = window.CostSimulators;

    const EMPTY_VALUE = '—';
    const WORK_DAYS_PER_WEEK = 5;

    const PERIODS = {
        hour: { unit: t('unit.hour'), step: 1, digits: 2 },
        month: { unit: t('unit.month'), step: 100, digits: 0 },
        year: { unit: t('unit.year'), step: 1000, digits: 0 }
    };

    const els = {
        pay: document.getElementById('pay'),
        payUnit: document.getElementById('payUnit'),
        hoursPerWeek: document.getElementById('hoursPerWeek'),
        price: document.getElementById('price'),
        panel: document.getElementById('resultPanel'),
        note: document.getElementById('resultNote'),
        results: {
            workTime: document.getElementById('workTime'),
            workDays: document.getElementById('workDays'),
            workWeeks: document.getElementById('workWeeks'),
            hourlyRate: document.getElementById('hourlyRate')
        }
    };

    let period = 'hour';

    function formatHours(value) {
        return formatNumber(value, Number.isInteger(value) ? 0 : 1);
    }

    function formatDays(value) {
        return t('days', { count: value, n: formatNumber(value, 1) });
    }

    function formatWeeks(value) {
        return t('weeks', { count: value, n: formatNumber(value, 1) });
    }

    function applyPeriod() {
        els.payUnit.textContent = PERIODS[period].unit;
        els.pay.closest('[data-stepper]').dataset.step = PERIODS[period].step;
    }

    function convertPay(from, to) {
        const pay = UI.readNumber(els.pay);
        const hoursPerWeek = UI.readNumber(els.hoursPerWeek);
        if (from === to || !(pay > 0) || !(hoursPerWeek > 0)) return;

        const hourly = Calculators.hourlyFromPay(pay, from, hoursPerWeek);
        const converted = Calculators.payFromHourly(hourly, to, hoursPerWeek);
        els.pay.value = String(Number(converted.toFixed(PERIODS[to].digits)));
        els.pay.dispatchEvent(new Event('input', { bubbles: true }));
    }

    function update() {
        const pay = UI.readNumber(els.pay);
        const hoursPerWeek = UI.readNumber(els.hoursPerWeek);
        const price = UI.readNumber(els.price);
        const valid = pay > 0 && hoursPerWeek > 0 && hoursPerWeek <= 168 && price > 0;

        els.panel.dataset.empty = String(!valid);

        if (!valid) {
            Object.values(els.results).forEach(function (element) {
                UI.clearNumber(element, EMPTY_VALUE);
            });
            els.note.textContent = t('note.empty');
            return;
        }

        const hourly = Calculators.hourlyFromPay(pay, period, hoursPerWeek);
        const hours = price / hourly;
        const hoursPerDay = hoursPerWeek / WORK_DAYS_PER_WEEK;

        UI.animateNumber(els.results.workTime, hours, formatWorkTime);
        UI.animateNumber(els.results.workDays, hours / hoursPerDay, formatDays);
        UI.animateNumber(els.results.workWeeks, hours / hoursPerWeek, formatWeeks);
        UI.animateNumber(els.results.hourlyRate, hourly, formatCurrency);

        els.note.textContent = t('note.result', { hours: formatHours(hoursPerDay), days: WORK_DAYS_PER_WEEK });
    }

    UI.bindSteppers(document);

    const periodChoice = UI.bindChoice('period', 'per', function (next) {
        const previous = period;
        period = next;
        applyPeriod();
        convertPay(previous, next);
        update();
    });

    period = periodChoice.value() || 'hour';
    applyPeriod();

    const urlState = UI.bindURLState({ pay: 'pay', hoursPerWeek: 'hw', price: 'price' }, update);
    UI.bindShare(document.getElementById('shareBtn'), urlState.flush);
    UI.bindPresets(document);
})();
