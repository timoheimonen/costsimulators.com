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

    const Calculators = {
        hourlyCost: function(params) {
            const rate = parseFloat(params.rate) || 0;
            const quantity = parseInt(params.quantity) || 0;
            const elapsedMs = parseFloat(params.elapsedMs) || 0;
            
            const hours = elapsedMs / (1000 * 60 * 60);
            return rate * quantity * hours;
        },

        quantityCost: function(params) {
            const unitPrice = parseFloat(params.unitPrice) || 0;
            const quantity = parseInt(params.quantity) || 0;
            
            return unitPrice * quantity;
        },

        subscriptionCost: function(params) {
            const monthlyCost = parseFloat(params.monthlyCost) || 0;
            const months = parseInt(params.months) || 0;
            
            return monthlyCost * months;
        },

        dailyCost: function(params) {
            const dailyRate = parseFloat(params.dailyRate) || 0;
            const days = parseInt(params.days) || 0;
            const elapsedMs = parseFloat(params.elapsedMs) || 0;
            
            const partialDays = elapsedMs / (1000 * 60 * 60 * 24);
            return dailyRate * (days + partialDays);
        }
    };

    global.CostSimulators.Calculators = Calculators;

})(window);
