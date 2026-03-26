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

(function (global) {
    'use strict';

    global.CostSimulators = global.CostSimulators || {};

    const UI = {
        initAdjustButtons: function (config, state) {
            const input = document.getElementById(config.inputId);
            const minusBtn = document.querySelector(config.minusSelector);
            const plusBtn = document.querySelector(config.plusSelector);

            if (!input || !minusBtn || !plusBtn) return;

            const handleClick = function (isPlus) {
                if (config.disabledWhenRunning && state && state.isRunning) return;

                const step = parseFloat(this.getAttribute('data-step')) || 1;
                const currentValue = parseFloat(input.value) || 0;
                const min = parseFloat(input.getAttribute('min')) || 0;

                let newValue;
                if (isPlus) {
                    newValue = currentValue + step;
                } else {
                    newValue = Math.max(min, currentValue - step);
                }

                input.value = newValue;
                input.dispatchEvent(new Event('input', { bubbles: true }));
                if (config.onChange) config.onChange(newValue);
            };

            minusBtn.addEventListener('click', function () {
                handleClick.call(this, false);
            });

            plusBtn.addEventListener('click', function () {
                handleClick.call(this, true);
            });

            this._adjustButtons = this._adjustButtons || {};
            this._adjustButtons[config.inputId] = { minus: minusBtn, plus: plusBtn, input: input };
        },

        setAdjustButtonsEnabled: function (enabled) {
            if (!this._adjustButtons) return;

            Object.values(this._adjustButtons).forEach(controls => {
                if (controls.input) {
                    controls.input.disabled = !enabled;
                }
                [controls.minus, controls.plus].forEach(btn => {
                    if (btn) {
                        btn.style.opacity = enabled ? '1' : '0.3';
                    }
                });
            });
        },

        initStateButton: function (config, callbacks) {
            const button = document.getElementById(config.buttonId);
            if (!button) return null;

            const STATES = {
                START: 'START',
                STOP: 'STOP',
                RESET: 'RESET'
            };

            let currentState = STATES.START;

            const controller = {
                getState: function () { return currentState; },

                setState: function (newState) {
                    currentState = newState;
                    button.textContent = newState;

                    if (newState === STATES.RESET) {
                        button.classList.add('stopped');
                    } else {
                        button.classList.remove('stopped');
                    }
                },

                handleClick: function () {
                    switch (currentState) {
                        case STATES.START:
                            if (callbacks.onStart) callbacks.onStart();
                            controller.setState(STATES.STOP);
                            break;
                        case STATES.STOP:
                            if (callbacks.onStop) callbacks.onStop();
                            controller.setState(STATES.RESET);
                            break;
                        case STATES.RESET:
                            if (callbacks.onReset) callbacks.onReset();
                            controller.setState(STATES.START);
                            break;
                    }
                }
            };

            button.addEventListener('click', controller.handleClick);
            return controller;
        },

        updateDisplays: function (config, timeStr, costValue) {
            const timerDisplay = document.getElementById(config.timerId);
            const costDisplay = document.getElementById(config.costId);
            const container = document.querySelector(config.containerSelector);

            if (timerDisplay) timerDisplay.textContent = timeStr;
            if (costDisplay) costDisplay.textContent = costValue;
        },

        setTimerRunning: function (containerSelector, isRunning) {
            const container = document.querySelector(containerSelector);
            if (container) {
                if (isRunning) {
                    container.classList.add('timer-running');
                } else {
                    container.classList.remove('timer-running');
                }
            }
        },

        initURLSync: function (inputIds, paramMapping, onParamsLoaded) {
            const CostSimulators = global.CostSimulators;

            inputIds.forEach(id => {
                const paramKey = paramMapping[id];
                if (paramKey) {
                    const value = CostSimulators.URLParams.get(paramKey);
                    if (value) {
                        const input = document.getElementById(id);
                        if (input) input.value = value;
                    }
                }
            });

            if (onParamsLoaded) onParamsLoaded();

            inputIds.forEach(id => {
                const input = document.getElementById(id);
                if (input) {
                    input.addEventListener('input', function () {
                        const params = {};
                        inputIds.forEach(inputId => {
                            const inputEl = document.getElementById(inputId);
                            const paramKey = paramMapping[inputId];
                            if (inputEl && paramKey) {
                                params[paramKey] = inputEl.value;
                            }
                        });
                        CostSimulators.URLParams.set(params);
                    });
                }
            });
        },

        copyToClipboard: function (text, buttonId, successText, resetText) {
            const button = document.getElementById(buttonId);
            if (!button) return;

            navigator.clipboard.writeText(text).then(function () {
                button.textContent = successText;
                setTimeout(function () {
                    button.textContent = resetText;
                }, 1500);
            });
        },

        toggleElement: function (elementId, show) {
            const element = document.getElementById(elementId);
            if (element) {
                element.style.display = show ? 'inline-block' : 'none';
            }
        },

        getInputValues: function (inputIds) {
            const values = {};
            inputIds.forEach(function (id) {
                const input = document.getElementById(id);
                if (input) {
                    values[id] = parseFloat(input.value) || 0;
                }
            });
            return values;
        }
    };

    global.CostSimulators.UI = UI;

})(window);
