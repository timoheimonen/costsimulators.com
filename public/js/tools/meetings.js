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

    const { Timer, Calculators, UI, formatCurrency, formatDuration } = window.CostSimulators;

    const MODES = {
        idle: { button: 'Start', status: 'Ready' },
        running: { button: 'Pause', status: 'Live' },
        paused: { button: 'Resume', status: 'Paused' }
    };

    const els = {
        rate: document.getElementById('costPerHour'),
        persons: document.getElementById('persons'),
        burnMinute: document.getElementById('burnMinute'),
        burnHour: document.getElementById('burnHour'),
        panel: document.getElementById('resultPanel'),
        cost: document.getElementById('cost'),
        clock: document.getElementById('timerClock'),
        fraction: document.getElementById('timerFraction'),
        status: document.getElementById('status'),
        statusText: document.getElementById('statusText'),
        primary: document.getElementById('primaryBtn'),
        primaryLabel: document.querySelector('#primaryBtn .btn-label'),
        reset: document.getElementById('resetBtn'),
        copy: document.getElementById('copyBtn'),
        announcer: document.getElementById('announcer')
    };

    const baseTitle = document.title;
    const state = { total: 0, lastElapsed: 0, lastDollar: 0, lastTitleSecond: -1 };
    let wakeLock = null;

    function readInputs() {
        return {
            rate: Math.max(0, UI.readNumber(els.rate)),
            persons: Math.max(0, UI.readNumber(els.persons))
        };
    }

    function announce(message) {
        els.announcer.textContent = message;
    }

    function updateTitle(elapsed) {
        const second = Math.floor(elapsed / 1000);
        if (second === state.lastTitleSecond) return;
        state.lastTitleSecond = second;
        document.title = elapsed > 0 ? formatCurrency(state.total) + ' · ' + baseTitle : baseTitle;
    }

    function render(elapsed) {
        const time = formatDuration(elapsed);
        els.cost.textContent = formatCurrency(state.total);
        els.clock.textContent = time.clock;
        els.fraction.textContent = '.' + time.fraction;
        updateTitle(elapsed);
    }

    function renderBurnRate() {
        const inputs = readInputs();
        const perHour = inputs.rate * inputs.persons;
        els.burnMinute.textContent = formatCurrency(perHour / 60);
        els.burnHour.textContent = formatCurrency(perHour);
    }

    function tick(elapsed) {
        const inputs = readInputs();
        state.total += Calculators.hourlyCost(inputs.rate, inputs.persons, elapsed - state.lastElapsed);
        state.lastElapsed = elapsed;

        const dollars = Math.floor(state.total);
        if (dollars > state.lastDollar) {
            state.lastDollar = dollars;
            UI.pulse(els.cost);
        }

        render(elapsed);
    }

    const timer = new Timer(tick);

    function setMode(mode) {
        els.panel.dataset.mode = mode;
        els.primary.dataset.state = mode;
        els.primaryLabel.textContent = MODES[mode].button;
        els.status.dataset.state = mode;
        els.statusText.textContent = MODES[mode].status;
        els.reset.hidden = mode !== 'paused';
        els.copy.hidden = mode !== 'paused';
    }

    function requestWakeLock() {
        if (!navigator.wakeLock || wakeLock) return;

        navigator.wakeLock.request('screen').then(function (sentinel) {
            wakeLock = sentinel;
            sentinel.addEventListener('release', function () {
                wakeLock = null;
            });
        }).catch(function () {
            wakeLock = null;
        });
    }

    function releaseWakeLock() {
        if (!wakeLock) return;
        wakeLock.release().catch(function () { });
        wakeLock = null;
    }

    function start() {
        const inputs = readInputs();
        const invalid = [];
        if (!(inputs.rate > 0)) invalid.push(els.rate);
        if (!(inputs.persons > 0)) invalid.push(els.persons);

        if (invalid.length) {
            UI.flagInvalid(invalid);
            announce('Enter an hourly rate and the number of participants to start.');
            return;
        }

        timer.start();
        requestWakeLock();
        setMode('running');
        announce('Timer started.');
    }

    function pause() {
        timer.pause();
        releaseWakeLock();
        state.lastTitleSecond = -1;
        updateTitle(state.lastElapsed);
        setMode('paused');
        announce('Paused at ' + formatCurrency(state.total) + ' after ' + formatDuration(state.lastElapsed).clock + '.');
    }

    function reset() {
        timer.reset();
        releaseWakeLock();
        state.total = 0;
        state.lastElapsed = 0;
        state.lastDollar = 0;
        state.lastTitleSecond = -1;
        render(0);
        setMode('idle');
        UI.resetLabel(els.copy);
        els.primary.focus();
        announce('Timer reset.');
    }

    function toggleRunning() {
        if (timer.running) pause();
        else start();
    }

    function buildReport() {
        const inputs = readInputs();
        return [
            'Meeting cost: ' + formatCurrency(state.total),
            'Duration: ' + formatDuration(state.lastElapsed).clock,
            'Participants: ' + inputs.persons + ' × ' + formatCurrency(inputs.rate) + '/h',
            'Calculated with costsimulators.com'
        ].join('\n');
    }

    UI.bindSteppers(document);
    const urlState = UI.bindURLState({ costPerHour: 'rate', persons: 'p' }, renderBurnRate);
    UI.bindShare(document.getElementById('shareBtn'), urlState.flush);

    els.primary.addEventListener('click', toggleRunning);
    els.reset.addEventListener('click', reset);
    els.copy.addEventListener('click', function () {
        UI.copyWithFeedback(els.copy, buildReport(), 'Copied!');
    });

    document.addEventListener('keydown', function (event) {
        if (event.code !== 'Space' || event.repeat || event.defaultPrevented) return;
        if (event.target instanceof Element && event.target.closest('input, textarea, select, button, a, [contenteditable]')) return;
        event.preventDefault();
        toggleRunning();
    });

    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible' && timer.running) requestWakeLock();
    });

    window.addEventListener('beforeunload', function (event) {
        if (!timer.running) return;
        event.preventDefault();
        event.returnValue = '';
    });

    setMode('idle');
})();
