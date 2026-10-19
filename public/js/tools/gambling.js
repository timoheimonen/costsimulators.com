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

    const { Calculators, UI, formatCurrency, t } = window.CostSimulators;

    const EMPTY_VALUE = '—';
    const TEN_YEARS = 10;

    const els = {
        stake: document.getElementById('stake'),
        perWeek: document.getElementById('perWeek'),
        payout: document.getElementById('payout'),
        panel: document.getElementById('resultPanel'),
        note: document.getElementById('resultNote'),
        invest: document.getElementById('invest'),
        results: {
            year10: document.getElementById('year10'),
            month: document.getElementById('month'),
            year1: document.getElementById('year1'),
            loss: document.getElementById('loss')
        }
    };

    function update() {
        const stake = UI.readNumber(els.stake);
        const perWeek = UI.readNumber(els.perWeek);
        const payout = UI.readNumber(els.payout);
        const valid = stake >= 0.01 && perWeek > 0 && payout >= 0 && payout <= 100;

        els.panel.dataset.empty = String(!valid);

        if (!valid) {
            Object.values(els.results).forEach(function (element) {
                UI.clearNumber(element, EMPTY_VALUE);
            });
            UI.showInvested(els.invest, 0);
            els.note.textContent = t('note.empty');
            return;
        }

        // The payout rate is the share of all stakes paid back as winnings on
        // average; the rest is what a player loses on average.
        const yearly = Calculators.weeklyCost(stake, perWeek, 1);
        const back = yearly * payout / 100;
        const loss = yearly - back;
        const values = {
            year10: Calculators.weeklyCost(stake, perWeek, TEN_YEARS),
            month: yearly / 12,
            year1: yearly,
            loss: loss
        };

        Object.keys(values).forEach(function (key) {
            UI.animateNumber(els.results[key], values[key], formatCurrency);
        });
        UI.showInvested(els.invest, yearly);

        els.note.textContent = t('note.result', {
            back: formatCurrency(back),
            loss: formatCurrency(loss),
            loss10: formatCurrency(loss * TEN_YEARS)
        });
    }

    UI.bindSteppers(document);
    const urlState = UI.bindURLState({ stake: 'st', perWeek: 'pw', payout: 'pr' }, update);
    UI.bindShare(document.getElementById('shareBtn'), urlState.flush);
    UI.bindPresets(document);
})();
