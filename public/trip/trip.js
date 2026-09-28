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
    const MPG_TIMES_L_PER_100KM = (100 * Units.LITERS_PER_GALLON) / Units.KM_PER_MILE;

    const UNITS = {
        metric: {
            distance: 'km one way',
            consumption: 'l/100 km',
            price: 'USD per liter',
            perDistance: 'km',
            fuel: 'l',
            consumptionStep: 0.5,
            priceStep: 0.05
        },
        us: {
            distance: 'miles one way',
            consumption: 'mpg',
            price: 'USD per gallon',
            perDistance: 'mile',
            fuel: 'gal',
            consumptionStep: 1,
            priceStep: 0.1
        }
    };

    const els = {
        distance: document.getElementById('distance'),
        consumption: document.getElementById('consumption'),
        fuelPrice: document.getElementById('fuelPrice'),
        people: document.getElementById('people'),
        tripsPerWeek: document.getElementById('tripsPerWeek'),
        distanceUnit: document.getElementById('distanceUnit'),
        consumptionUnit: document.getElementById('consumptionUnit'),
        fuelPriceUnit: document.getElementById('fuelPriceUnit'),
        consumptionHint: document.getElementById('consumptionHint'),
        tripLabel: document.getElementById('tripLabel'),
        panel: document.getElementById('resultPanel'),
        note: document.getElementById('resultNote'),
        results: {
            trip: document.getElementById('trip'),
            person: document.getElementById('person'),
            month: document.getElementById('month'),
            year: document.getElementById('year')
        }
    };

    let unit = 'metric';
    let direction = 'round';

    function round(value, digits) {
        return Number(value.toFixed(digits));
    }

    function setValue(input, value) {
        input.value = String(value);
        input.dispatchEvent(new Event('input', { bubbles: true }));
    }

    function convertValues(from, to) {
        if (from === to) return;
        const toUs = to === 'us';
        const distance = UI.readNumber(els.distance);
        const consumption = UI.readNumber(els.consumption);
        const price = UI.readNumber(els.fuelPrice);

        if (distance > 0) {
            setValue(els.distance, round(toUs ? distance / Units.KM_PER_MILE : distance * Units.KM_PER_MILE, 1));
        }
        if (consumption > 0) {
            setValue(els.consumption, round(MPG_TIMES_L_PER_100KM / consumption, 1));
        }
        if (price > 0) {
            setValue(els.fuelPrice, round(toUs ? price * Units.LITERS_PER_GALLON : price / Units.LITERS_PER_GALLON, 2));
        }
    }

    function applyUnitLabels() {
        const labels = UNITS[unit];
        els.distanceUnit.textContent = labels.distance;
        els.consumptionUnit.textContent = labels.consumption;
        els.fuelPriceUnit.textContent = labels.price;
        els.consumption.closest('[data-stepper]').dataset.step = labels.consumptionStep;
        els.fuelPrice.closest('[data-stepper]').dataset.step = labels.priceStep;
        els.consumptionHint.hidden = unit !== 'metric';
    }

    function update() {
        const distance = UI.readNumber(els.distance);
        const consumption = UI.readNumber(els.consumption);
        const price = UI.readNumber(els.fuelPrice);
        const people = UI.readNumber(els.people);
        const tripsPerWeek = UI.readNumber(els.tripsPerWeek);
        const valid = distance > 0 && consumption > 0 && price > 0 && people >= 1 && tripsPerWeek >= 0;

        els.tripLabel.textContent = direction === 'round' ? 'Round trip' : 'One way';
        els.panel.dataset.empty = String(!valid);

        if (!valid) {
            Object.values(els.results).forEach(function (element) {
                UI.clearNumber(element, EMPTY_VALUE);
            });
            els.note.textContent = 'Enter the distance, fuel consumption and fuel price to see the cost.';
            return;
        }

        const labels = UNITS[unit];
        const fuelPerDistance = Calculators.fuelPerDistance(consumption, unit);
        const fuel = distance * (direction === 'round' ? 2 : 1) * fuelPerDistance;
        const trip = fuel * price;
        const yearly = trip * tripsPerWeek * Units.WEEKS_PER_YEAR;

        UI.animateNumber(els.results.trip, trip, formatCurrency);
        UI.animateNumber(els.results.person, trip / people, formatCurrency);
        UI.animateNumber(els.results.month, yearly / 12, formatCurrency);
        UI.animateNumber(els.results.year, yearly, formatCurrency);

        els.note.textContent = 'Uses ' + formatNumber(fuel, 1) + ' ' + labels.fuel + ' of fuel per trip, about ' +
            formatCurrency(fuelPerDistance * price) + ' per ' + labels.perDistance + '.';
    }

    UI.bindSteppers(document);

    const unitChoice = UI.bindChoice('unit', 'u', function (next) {
        const previous = unit;
        unit = next;
        convertValues(previous, next);
        applyUnitLabels();
        update();
    });

    const directionChoice = UI.bindChoice('direction', 'rt', function (next) {
        direction = next;
        update();
    });

    unit = unitChoice.value() || 'metric';
    direction = directionChoice.value() || 'round';
    applyUnitLabels();

    const urlState = UI.bindURLState({
        distance: 'd',
        consumption: 'c',
        fuelPrice: 'fp',
        people: 'n',
        tripsPerWeek: 'tw'
    }, update);

    UI.bindShare(document.getElementById('shareBtn'), urlState.flush);
})();
