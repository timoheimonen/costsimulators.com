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

(function(global) {
    'use strict';

    global.CostSimulators = global.CostSimulators || {};

    class Timer {
        constructor() {
            this.startTime = null;
            this.isRunning = false;
            this.animationFrame = null;
            this.onTickCallbacks = [];
            this.onStartCallbacks = [];
            this.onStopCallbacks = [];
            this._lastHundredths = -1;
        }

        onTick(fn) {
            this.onTickCallbacks.push(fn);
            return this;
        }

        onStart(fn) {
            this.onStartCallbacks.push(fn);
            return this;
        }

        onStop(fn) {
            this.onStopCallbacks.push(fn);
            return this;
        }

        getElapsed() {
            if (!this.startTime) return 0;
            return Date.now() - this.startTime;
        }

        start() {
            if (this.isRunning) return;
            this.startTime = Date.now();
            this.isRunning = true;
            this.onStartCallbacks.forEach(fn => fn());
            this._tick();
        }

        stop() {
            if (!this.isRunning) return;
            this.isRunning = false;
            if (this.animationFrame) {
                cancelAnimationFrame(this.animationFrame);
                this.animationFrame = null;
            }
            const elapsed = this.getElapsed();
            this.onStopCallbacks.forEach(fn => fn(elapsed));
        }

        reset() {
            this.stop();
            this.startTime = null;
            this._lastHundredths = -1;
        }

        _tick() {
            if (!this.isRunning) return;
            const elapsed = this.getElapsed();
            const hundredths = Math.floor(elapsed / 10);
            if (hundredths !== this._lastHundredths) {
                this._lastHundredths = hundredths;
                this.onTickCallbacks.forEach(fn => fn(elapsed));
            }
            this.animationFrame = requestAnimationFrame(() => this._tick());
        }
    }

    global.CostSimulators.Timer = Timer;

})(window);
