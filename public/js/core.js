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

    const HOUR_MS = 3600000;
    const WEEKS_PER_YEAR = 52;
    const DAYS_PER_YEAR = 365;

    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const KM_PER_MILE = 1.609344;
    const LITERS_PER_GALLON = 3.785411784;
    const BILLING_PER_YEAR = { weekly: 52, monthly: 12, yearly: 1 };

    const numberFormatters = {};

    function pad(value) {
        return String(value).padStart(2, '0');
    }

    const CostSimulators = global.CostSimulators || {};

    CostSimulators.formatCurrency = function (value) {
        return currencyFormatter.format(Number.isFinite(value) ? value : 0);
    };

    CostSimulators.formatNumber = function (value, digits) {
        const key = digits || 0;
        if (!numberFormatters[key]) {
            numberFormatters[key] = new Intl.NumberFormat('en-US', {
                minimumFractionDigits: key,
                maximumFractionDigits: key
            });
        }
        return numberFormatters[key].format(Number.isFinite(value) ? value : 0);
    };

    CostSimulators.formatInteger = function (value) {
        return CostSimulators.formatNumber(value, 0);
    };

    CostSimulators.formatWorkTime = function (hours) {
        const totalMinutes = Math.round(Math.max(0, hours) * 60);
        const wholeHours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        if (wholeHours === 0) return minutes + ' min';
        if (wholeHours >= 100) return CostSimulators.formatInteger(wholeHours) + ' h';
        return wholeHours + ' h ' + minutes + ' min';
    };

    CostSimulators.formatDuration = function (elapsedMs) {
        const totalSeconds = Math.floor(elapsedMs / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return {
            clock: pad(hours) + ':' + pad(minutes) + ':' + pad(seconds),
            fraction: pad(Math.floor((elapsedMs % 1000) / 10))
        };
    };

    CostSimulators.Units = {
        KM_PER_MILE: KM_PER_MILE,
        LITERS_PER_GALLON: LITERS_PER_GALLON,
        WEEKS_PER_YEAR: WEEKS_PER_YEAR,
        DAYS_PER_YEAR: DAYS_PER_YEAR
    };

    CostSimulators.Calculators = {
        hourlyCost: function (rate, quantity, elapsedMs) {
            return (rate * quantity * elapsedMs) / HOUR_MS;
        },

        weeklyCost: function (price, perWeek, years) {
            return price * perWeek * WEEKS_PER_YEAR * years;
        },

        perYear: function (perWeek) {
            return perWeek * WEEKS_PER_YEAR;
        },

        dailyCost: function (price, perDay, years) {
            return price * perDay * DAYS_PER_YEAR * years;
        },

        perYearDaily: function (perDay) {
            return perDay * DAYS_PER_YEAR;
        },

        energyKwh: function (watts, hours) {
            return (watts * hours) / 1000;
        },

        fuelPerDistance: function (consumption, unit) {
            return unit === 'us' ? 1 / consumption : consumption / 100;
        },

        yearlyFromBilling: function (price, cycle) {
            return price * (BILLING_PER_YEAR[cycle] || 12);
        },

        hourlyFromPay: function (pay, period, hoursPerWeek) {
            if (period === 'hour') return pay;
            const hoursPerYear = hoursPerWeek * WEEKS_PER_YEAR;
            return period === 'month' ? (pay * 12) / hoursPerYear : pay / hoursPerYear;
        },

        payFromHourly: function (hourly, period, hoursPerWeek) {
            if (period === 'hour') return hourly;
            const yearly = hourly * hoursPerWeek * WEEKS_PER_YEAR;
            return period === 'month' ? yearly / 12 : yearly;
        }
    };

    global.CostSimulators = CostSimulators;
})(window);
