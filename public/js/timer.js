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

    const TICK_MS = 10;
    const BACKGROUND_TICK_MS = 1000;

    class Timer {
        constructor(onTick) {
            this.onTick = onTick;
            this.accumulated = 0;
            this.startedAt = null;
            this.frame = 0;
            this.interval = 0;
            this.lastBucket = -1;
            this.loop = this.loop.bind(this);
            this.emit = this.emit.bind(this);
        }

        get running() {
            return this.startedAt !== null;
        }

        elapsed() {
            const current = this.running ? performance.now() - this.startedAt : 0;
            return this.accumulated + current;
        }

        start() {
            if (this.running) return;
            this.startedAt = performance.now();
            this.interval = setInterval(this.emit, BACKGROUND_TICK_MS);
            this.loop();
        }

        pause() {
            if (!this.running) return;
            this.accumulated = this.elapsed();
            this.startedAt = null;
            cancelAnimationFrame(this.frame);
            clearInterval(this.interval);
            this.emit(true);
        }

        reset() {
            this.pause();
            this.accumulated = 0;
            this.lastBucket = -1;
        }

        emit(force) {
            const elapsed = this.elapsed();
            const bucket = Math.floor(elapsed / TICK_MS);
            if (force !== true && bucket === this.lastBucket) return;
            this.lastBucket = bucket;
            this.onTick(elapsed);
        }

        loop() {
            this.emit();
            this.frame = requestAnimationFrame(this.loop);
        }
    }

    global.CostSimulators = global.CostSimulators || {};
    global.CostSimulators.Timer = Timer;
})(window);
