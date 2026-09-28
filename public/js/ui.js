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

    const HOLD_DELAY_MS = 400;
    const HOLD_INTERVAL_MS = 70;
    const URL_WRITE_DELAY_MS = 250;
    const TWEEN_MS = 450;
    const FEEDBACK_MS = 1800;

    const reducedMotion = global.matchMedia('(prefers-reduced-motion: reduce)');
    const coarsePointer = global.matchMedia('(pointer: coarse)');
    const tweens = new WeakMap();
    const feedbackTimers = new WeakMap();

    function decimals(value) {
        const text = String(value);
        const index = text.indexOf('.');
        return index === -1 ? 0 : text.length - index - 1;
    }

    function readNumber(input) {
        const value = parseFloat(input.value);
        return Number.isFinite(value) ? value : 0;
    }

    function readLimit(input, name, fallback) {
        const value = parseFloat(input.getAttribute(name));
        return Number.isFinite(value) ? value : fallback;
    }

    function stepInput(input, delta) {
        const current = readNumber(input);
        const precision = Math.max(decimals(delta), decimals(current));
        const min = readLimit(input, 'min', -Infinity);
        const max = readLimit(input, 'max', Infinity);
        const next = Math.min(max, Math.max(min, Number((current + delta).toFixed(precision))));

        if (String(next) === input.value) return;
        input.value = String(next);
        input.dispatchEvent(new Event('input', { bubbles: true }));
    }

    function bindHold(button, action) {
        let timeout = null;
        let pressed = false;
        let repeating = false;

        function cancel() {
            clearTimeout(timeout);
            timeout = null;
            pressed = false;
            repeating = false;
        }

        function repeat() {
            repeating = true;
            action();
            timeout = setTimeout(repeat, HOLD_INTERVAL_MS);
        }

        button.addEventListener('pointerdown', function (event) {
            if (event.button !== 0) return;
            cancel();
            pressed = true;
            timeout = setTimeout(repeat, HOLD_DELAY_MS);
        });

        button.addEventListener('pointerup', function () {
            if (pressed && !repeating) action();
            cancel();
        });

        button.addEventListener('pointerleave', cancel);
        button.addEventListener('pointercancel', cancel);

        button.addEventListener('click', function (event) {
            if (event.detail === 0) action();
        });

        button.addEventListener('contextmenu', function (event) {
            event.preventDefault();
        });
    }

    function bindSteppers(root) {
        (root || document).querySelectorAll('[data-stepper]').forEach(function (stepper) {
            const input = stepper.querySelector('input');

            function step() {
                return parseFloat(stepper.dataset.step) || 1;
            }

            stepper.querySelectorAll('[data-direction]').forEach(function (button) {
                const direction = button.dataset.direction === 'down' ? -1 : 1;
                bindHold(button, function () {
                    stepInput(input, direction * step());
                });
            });

            input.addEventListener('keydown', function (event) {
                if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
                event.preventDefault();
                const direction = event.key === 'ArrowUp' ? 1 : -1;
                stepInput(input, direction * step() * (event.shiftKey ? 10 : 1));
            });
        });
    }

    function writeParams(values) {
        const search = new URLSearchParams(global.location.search);
        Object.keys(values).forEach(function (key) {
            const value = values[key];
            if (Array.isArray(value)) {
                search.delete(key);
                if (value.length) {
                    value.forEach(function (entry) {
                        search.append(key, entry);
                    });
                } else {
                    search.set(key, '');
                }
            } else if (value === '' || value === null) {
                search.delete(key);
            } else {
                search.set(key, value);
            }
        });

        const query = search.toString();
        const url = global.location.pathname + (query ? '?' + query : '') + global.location.hash;
        global.history.replaceState(global.history.state, '', url);
    }

    function bindChoice(name, key, onChange) {
        const radios = Array.from(document.querySelectorAll('input[type="radio"][name="' + name + '"]'));
        const initial = new URLSearchParams(global.location.search).get(key);

        radios.forEach(function (radio) {
            if (radio.value === initial) radio.checked = true;
        });

        function value() {
            const checked = radios.find(function (radio) {
                return radio.checked;
            });
            return checked ? checked.value : null;
        }

        radios.forEach(function (radio) {
            radio.addEventListener('change', function () {
                const params = {};
                params[key] = value();
                writeParams(params);
                onChange(value());
            });
        });

        return { value: value };
    }

    function bindURLState(fields, onChange) {
        const entries = Object.entries(fields).map(function (entry) {
            return { input: document.getElementById(entry[0]), key: entry[1] };
        });
        const params = new URLSearchParams(global.location.search);
        let pending = null;

        entries.forEach(function (entry) {
            const value = params.get(entry.key);
            if (value !== null && Number.isFinite(parseFloat(value))) entry.input.value = value;
        });

        function flush() {
            clearTimeout(pending);
            pending = null;

            const values = {};
            entries.forEach(function (entry) {
                values[entry.key] = entry.input.value;
            });
            writeParams(values);
        }

        entries.forEach(function (entry) {
            entry.input.addEventListener('input', function () {
                clearTimeout(pending);
                pending = setTimeout(flush, URL_WRITE_DELAY_MS);
                onChange();
            });
        });

        onChange();

        return { flush: flush };
    }

    function bindPresets(root) {
        (root || document).querySelectorAll('[data-presets-for]').forEach(function (group) {
            const input = document.getElementById(group.dataset.presetsFor);
            const presets = group.querySelectorAll('[data-preset]');

            function sync() {
                const value = parseFloat(input.value);
                presets.forEach(function (preset) {
                    preset.setAttribute('aria-pressed', String(parseFloat(preset.dataset.preset) === value));
                });
            }

            presets.forEach(function (preset) {
                preset.addEventListener('click', function () {
                    input.value = preset.dataset.preset;
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                });
            });

            input.addEventListener('input', sync);
            sync();
        });
    }

    function copyText(text) {
        if (navigator.clipboard && global.isSecureContext) {
            return navigator.clipboard.writeText(text);
        }

        return new Promise(function (resolve, reject) {
            const area = document.createElement('textarea');
            area.value = text;
            area.setAttribute('readonly', '');
            area.style.position = 'fixed';
            area.style.opacity = '0';
            document.body.appendChild(area);
            area.select();

            let copied = false;
            try {
                copied = document.execCommand('copy');
            } catch (error) {
                copied = false;
            }

            area.remove();
            if (copied) resolve();
            else reject(new Error('Copy failed'));
        });
    }

    function flashLabel(button, text) {
        const label = button.querySelector('.btn-label') || button;
        if (!button.dataset.label) button.dataset.label = label.textContent;

        label.textContent = text;
        clearTimeout(feedbackTimers.get(button));
        feedbackTimers.set(button, setTimeout(function () {
            label.textContent = button.dataset.label;
        }, FEEDBACK_MS));
    }

    function resetLabel(button) {
        clearTimeout(feedbackTimers.get(button));
        if (!button.dataset.label) return;
        (button.querySelector('.btn-label') || button).textContent = button.dataset.label;
    }

    function copyWithFeedback(button, text, successText) {
        copyText(text).then(function () {
            flashLabel(button, successText);
        }, function () {
            flashLabel(button, global.CostSimulators.t('share.copyFailed'));
        });
    }

    function bindShare(button, beforeShare) {
        if (!button) return;

        button.addEventListener('click', function () {
            if (beforeShare) beforeShare();
            const url = global.location.href;
            const linkCopied = global.CostSimulators.t('share.linkCopied');

            if (navigator.share && coarsePointer.matches) {
                navigator.share({ title: document.title, url: url }).catch(function (error) {
                    if (error.name !== 'AbortError') copyWithFeedback(button, url, linkCopied);
                });
                return;
            }

            copyWithFeedback(button, url, linkCopied);
        });
    }

    function animateNumber(element, target, format) {
        const previous = tweens.get(element);
        if (previous) cancelAnimationFrame(previous.frame);

        const from = previous ? previous.value : 0;
        const entry = { value: from, frame: 0 };
        tweens.set(element, entry);

        if (reducedMotion.matches || from === target) {
            entry.value = target;
            element.textContent = format(target);
            return;
        }

        const start = performance.now();

        function step(now) {
            const progress = Math.min(1, (now - start) / TWEEN_MS);
            const eased = 1 - Math.pow(1 - progress, 3);
            entry.value = from + (target - from) * eased;
            element.textContent = format(progress === 1 ? target : entry.value);
            if (progress < 1) entry.frame = requestAnimationFrame(step);
        }

        entry.frame = requestAnimationFrame(step);
    }

    function clearNumber(element, text) {
        const previous = tweens.get(element);
        if (previous) cancelAnimationFrame(previous.frame);
        tweens.delete(element);
        element.textContent = text;
    }

    function pulse(element) {
        if (reducedMotion.matches || !element.animate) return;
        element.animate(
            [{ transform: 'scale(1)' }, { transform: 'scale(1.045)' }, { transform: 'scale(1)' }],
            { duration: 280, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
        );
    }

    function flagInvalid(inputs) {
        inputs.forEach(function (input) {
            const field = input.closest('.field');
            field.classList.remove('is-invalid');
            void field.offsetWidth;
            field.classList.add('is-invalid');
            input.setAttribute('aria-invalid', 'true');

            input.addEventListener('input', function () {
                field.classList.remove('is-invalid');
                input.removeAttribute('aria-invalid');
            }, { once: true });
        });

        if (inputs.length) inputs[0].focus();
    }

    global.CostSimulators = global.CostSimulators || {};
    global.CostSimulators.UI = {
        readNumber: readNumber,
        bindSteppers: bindSteppers,
        bindURLState: bindURLState,
        writeParams: writeParams,
        bindChoice: bindChoice,
        bindPresets: bindPresets,
        bindShare: bindShare,
        copyWithFeedback: copyWithFeedback,
        resetLabel: resetLabel,
        animateNumber: animateNumber,
        clearNumber: clearNumber,
        pulse: pulse,
        flagInvalid: flagInvalid
    };
})(window);
