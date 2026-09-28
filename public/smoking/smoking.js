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

    const { Calculators, UI, formatCurrency, formatInteger } = window.CostSimulators;

    const EMPTY_VALUE = '—';

    const els = {
        packPrice: document.getElementById('packPrice'),
        perDay: document.getElementById('perDay'),
        perPack: document.getElementById('perPack'),
        panel: document.getElementById('resultPanel'),
        note: document.getElementById('resultNote'),
        results: {
            year10: document.getElementById('year10'),
            month: document.getElementById('month'),
            year1: document.getElementById('year1'),
            year5: document.getElementById('year5')
        }
    };

    function update() {
        const packPrice = UI.readNumber(els.packPrice);
        const perDay = UI.readNumber(els.perDay);
        const perPack = UI.readNumber(els.perPack);
        const valid = packPrice >= 0.01 && perDay > 0 && perPack >= 1;

        els.panel.dataset.empty = String(!valid);

        if (!valid) {
            Object.values(els.results).forEach(function (element) {
                UI.clearNumber(element, EMPTY_VALUE);
            });
            els.note.textContent = 'Enter the pack price, how many you smoke a day and the pack size to see the totals.';
            return;
        }

        const pricePerCigarette = packPrice / perPack;
        const yearly = Calculators.dailyCost(pricePerCigarette, perDay, 1);
        const values = {
            year10: Calculators.dailyCost(pricePerCigarette, perDay, 10),
            month: yearly / 12,
            year1: yearly,
            year5: Calculators.dailyCost(pricePerCigarette, perDay, 5)
        };

        Object.keys(values).forEach(function (key) {
            UI.animateNumber(els.results[key], values[key], formatCurrency);
        });

        const cigarettesPerYear = Calculators.perYearDaily(perDay);
        els.note.textContent = 'That’s about ' + formatInteger(cigarettesPerYear) + ' cigarettes (' +
            formatInteger(cigarettesPerYear / perPack) + ' packs) a year at ' +
            formatCurrency(pricePerCigarette) + ' each.';
    }

    UI.bindSteppers(document);
    const urlState = UI.bindURLState({ packPrice: 'price', perDay: 'pd', perPack: 'pp' }, update);
    UI.bindShare(document.getElementById('shareBtn'), urlState.flush);
    UI.bindPresets(document);
})();
