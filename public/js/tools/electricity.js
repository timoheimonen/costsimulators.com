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

    const { Calculators, Units, UI, formatCurrency, formatNumber } = window.CostSimulators;

    const EMPTY_VALUE = '—';

    const els = {
        power: document.getElementById('power'),
        hours: document.getElementById('hours'),
        days: document.getElementById('days'),
        kwhPrice: document.getElementById('kwhPrice'),
        panel: document.getElementById('resultPanel'),
        note: document.getElementById('resultNote'),
        results: {
            year: document.getElementById('year'),
            day: document.getElementById('day'),
            month: document.getElementById('month'),
            energy: document.getElementById('energy')
        }
    };

    function formatEnergy(kwh) {
        return formatNumber(kwh, kwh < 10 ? 1 : 0) + ' kWh';
    }

    function update() {
        const power = UI.readNumber(els.power);
        const hours = UI.readNumber(els.hours);
        const days = UI.readNumber(els.days);
        const centsPerKwh = UI.readNumber(els.kwhPrice);
        const valid = power > 0 && hours > 0 && hours <= 24 && days > 0 && days <= 7 && centsPerKwh > 0;

        els.panel.dataset.empty = String(!valid);

        if (!valid) {
            Object.values(els.results).forEach(function (element) {
                UI.clearNumber(element, EMPTY_VALUE);
            });
            els.note.textContent = 'Enter the power, daily hours (up to 24), days per week (up to 7) and your electricity price.';
            return;
        }

        const pricePerKwh = centsPerKwh / 100;
        const kwhPerDay = Calculators.energyKwh(power, hours);
        const kwhPerYear = (kwhPerDay * days * Units.DAYS_PER_YEAR) / 7;
        const yearly = kwhPerYear * pricePerKwh;

        UI.animateNumber(els.results.year, yearly, formatCurrency);
        UI.animateNumber(els.results.day, kwhPerDay * pricePerKwh, formatCurrency);
        UI.animateNumber(els.results.month, yearly / 12, formatCurrency);
        UI.animateNumber(els.results.energy, kwhPerYear, formatEnergy);

        els.note.textContent = 'Uses about ' + formatEnergy(kwhPerDay) + ' on each day it runs, around ' +
            formatEnergy(kwhPerYear) + ' a year.';
    }

    UI.bindSteppers(document);
    const urlState = UI.bindURLState({ power: 'w', hours: 'h', days: 'd', kwhPrice: 'c' }, update);
    UI.bindShare(document.getElementById('shareBtn'), urlState.flush);
    UI.bindPresets(document);
})();
