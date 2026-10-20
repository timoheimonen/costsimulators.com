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

// The habit receipt: ten years of a habit printed as a till receipt with one
// line per purchase, as long as a real one would be. Only the lines in view
// are in the page, so even tens of thousands of lines scroll smoothly.
(function (global) {
    'use strict';

    // A line is this tall on screen. The printed length uses LINE_MM, about
    // what a till roll takes for one line.
    const LINE_PX = 24;
    const LINE_MM = 4;
    // Lines above and below the purchases (store name, dates, totals),
    // counted into the printed length.
    const HEAD_LINES = 8;
    const FOOT_LINES = 9;
    // At most this many purchase lines a year. A bigger year ends in one
    // "Coffee × 1,234" line, so the receipt stays within what browsers scroll.
    const MAX_ROWS_PER_YEAR = 20000;
    const OVERSCAN = 12;
    const MM_PER_FOOT = 304.8;

    const IMAGE_NAME = 'costsimulators-receipt.png';
    const IMAGE_W = 1080;
    const IMAGE_H = 1350;
    const PAPER_W = 780;
    const PAPER_PAD = 56;
    const TOOTH_W = 26;
    const INK = '#26241f';
    const INK_FAINT = '#7a756a';
    const PAPER = '#fffef9';
    // How the rows under the totals line are drawn in the image, by their
    // receipt-row--<name> class. The last one is for the other rows.
    const FOOT_STYLES = [
        { name: 'total', size: 32, valueSize: 42, weight: 700, height: 66 },
        { name: 'length', size: 30, weight: 700, height: 56, highlight: true },
        { name: 'invest', size: 24, height: 42, color: INK_FAINT },
        { name: '', size: 26, height: 42 }
    ];

    const app = global.CostSimulators;
    const reducedMotion = global.matchMedia('(prefers-reduced-motion: reduce)');
    const coarsePointer = global.matchMedia('(pointer: coarse)');
    const lengthFormatters = {};

    function t(key, vars) {
        return app.t(key, vars);
    }

    // One habit bought again and again: `price` paid `perYear` times a year.
    // Year y ends after round(perYear × y) purchases, so a habit of 4.5 cups
    // a week still adds up. The subtotals and the total are the exact amounts
    // the calculator shows: 15 cigarettes a day is 273.75 packs a year, which
    // prints as 274 lines in some years and 273 in others.
    function habitLines(state) {
        const priceText = app.formatCurrency(state.price);
        return {
            yearly: state.perYear * state.price,
            itemsBy: function (year) {
                return Math.round(state.perYear * year);
            },
            amountBy: function (year) {
                return state.perYear * year * state.price;
            },
            maxRows: MAX_ROWS_PER_YEAR,
            line: function (section, k) {
                const rest = section.items - section.rows + 1;
                if (k === section.rows - 1 && rest > 1) {
                    return { label: state.item + ' × ' + app.formatInteger(rest), text: app.formatCurrency(rest * state.price) };
                }
                return { label: state.item, text: priceText };
            },
            amountOf: function (section, count) {
                return count >= section.items ? section.amount : Math.min(count * state.price, section.amount);
            }
        };
    }

    // Lines with their own names and prices (subscriptions): one year of
    // them, printed again every year.
    function listLines(state) {
        const lines = state.lines.map(function (line) {
            return { label: line.label, amount: line.amount, text: app.formatCurrency(line.amount) };
        });
        const sums = [0];
        lines.forEach(function (line, i) {
            sums.push(sums[i] + line.amount);
        });

        return {
            yearly: sums[lines.length],
            itemsBy: function (year) {
                return lines.length * year;
            },
            amountBy: function (year) {
                return sums[lines.length] * year;
            },
            maxRows: Infinity,
            line: function (section, k) {
                return lines[k];
            },
            amountOf: function (section, count) {
                return sums[count];
            }
        };
    }

    function buildModel(state) {
        const years = app.Units.INVEST_YEARS;
        const source = state.lines ? listLines(state) : habitLines(state);
        const sections = [];
        let start = 0;
        let before = 0;
        let amountBefore = 0;

        for (let year = 1; year <= years; year++) {
            const end = source.itemsBy(year);
            const section = { year: year, start: start, items: end - before, before: before, amountBefore: amountBefore };
            section.rows = Math.min(section.items, source.maxRows);
            section.amount = source.amountBy(year) - amountBefore;
            sections.push(section);
            start += section.rows + 1;
            before = end;
            amountBefore += section.amount;
        }

        return {
            item: state.item,
            values: state.values || {},
            source: source,
            yearly: source.yearly,
            years: years,
            items: before,
            total: amountBefore,
            sections: sections,
            rowCount: start
        };
    }

    function findSection(model, index) {
        for (let i = model.sections.length - 1; i > 0; i--) {
            if (index >= model.sections[i].start) return model.sections[i];
        }
        return model.sections[0];
    }

    function rowAt(model, index) {
        const section = findSection(model, index);
        const k = index - section.start;

        if (k === section.rows) {
            return {
                subtotal: true,
                label: t('receipt.subtotal', { year: section.year }),
                text: app.formatCurrency(section.amount)
            };
        }
        return model.source.line(section, k);
    }

    // What has been printed up to and including row `index`.
    function printedUpTo(model, index) {
        if (index < 0) return { year: 1, items: 0, subtotals: 0, amount: 0 };

        const section = findSection(model, index);
        const k = Math.min(index - section.start, section.rows);
        const items = k >= section.rows - 1 ? section.items : k + 1;
        return {
            year: section.year,
            items: section.before + items,
            subtotals: section.year - 1 + (k === section.rows ? 1 : 0),
            amount: section.amountBefore + model.source.amountOf(section, items)
        };
    }

    function totalLengthMm(model) {
        return (HEAD_LINES + model.items + model.years + FOOT_LINES) * LINE_MM;
    }

    // Feet for American English, meters everywhere else.
    function formatLength(mm) {
        const feet = t('receipt.unit') === 'foot';
        const value = feet ? mm / MM_PER_FOOT : mm / 1000;
        const digits = value < 100 ? 1 : 0;
        const key = (feet ? 'foot' : 'meter') + digits;

        if (!lengthFormatters[key]) {
            try {
                lengthFormatters[key] = new Intl.NumberFormat(app.locale, {
                    style: 'unit',
                    unit: feet ? 'foot' : 'meter',
                    unitDisplay: 'short',
                    minimumFractionDigits: digits,
                    maximumFractionDigits: digits
                });
            } catch (error) {
                lengthFormatters[key] = {
                    format: function (number) {
                        return app.formatNumber(number, digits) + (feet ? ' ft' : ' m');
                    }
                };
            }
        }
        return lengthFormatters[key].format(value);
    }

    function formatDates(years) {
        const start = new Date();
        const end = new Date(start);
        end.setFullYear(start.getFullYear() + years);

        const format = new Intl.DateTimeFormat(app.locale, { dateStyle: 'medium' });
        if (format.formatRange) return format.formatRange(start, end);
        return format.format(start) + ' - ' + format.format(end);
    }

    function invested(model) {
        const monthly = model.yearly / 12;
        return app.Calculators.investedMonthly(monthly, app.Units.INVEST_RATE, model.years);
    }

    function rowElement(row) {
        const line = document.createElement('div');
        line.className = row.subtotal ? 'receipt-line receipt-line--sub' : 'receipt-line';

        const label = document.createElement('span');
        label.textContent = row.label;
        const amount = document.createElement('span');
        amount.textContent = row.text;

        line.append(label, amount);
        return line;
    }

    function setText(element, text) {
        if (element.textContent !== text) element.textContent = text;
    }

    // Puts the lines in view (and a few around them) into the page, and
    // updates how far the receipt has been printed.
    function render(view) {
        const model = view.model;
        if (!model) return;

        const linesTop = view.lines.getBoundingClientRect().top - view.scroller.getBoundingClientRect().top;
        const viewTop = -linesTop;
        const viewBottom = viewTop + view.scroller.clientHeight;
        const first = Math.max(0, Math.min(model.rowCount, Math.floor(viewTop / LINE_PX) - OVERSCAN));
        const last = Math.max(first, Math.min(model.rowCount, Math.ceil(viewBottom / LINE_PX) + OVERSCAN));

        if (first !== view.first || last !== view.last) {
            const fragment = document.createDocumentFragment();
            for (let i = first; i < last; i++) fragment.appendChild(rowElement(rowAt(model, i)));
            view.window.replaceChildren(fragment);
            view.window.style.transform = 'translateY(' + first * LINE_PX + 'px)';
            view.first = first;
            view.last = last;
        }

        const done = viewBottom >= model.rowCount * LINE_PX;
        const printed = done
            ? { year: model.years, items: model.items, subtotals: model.years, amount: model.total }
            : printedUpTo(model, Math.floor(viewBottom / LINE_PX) - 1);
        const mm = done ? totalLengthMm(model) : (HEAD_LINES + printed.items + printed.subtotals) * LINE_MM;

        setText(view.progress.year, t('receipt.year', { year: printed.year }));
        setText(view.progress.length, formatLength(mm));
        setText(view.progress.amount, app.formatCurrency(printed.amount));
    }

    function scheduleRender(view) {
        if (view.frame) return;
        view.frame = global.requestAnimationFrame(function () {
            view.frame = 0;
            render(view);
        });
    }

    function fill(view) {
        const model = view.model;
        const dialog = view.dialog;

        const values = typeof model.values === 'function'
            ? model.values({ total: model.total, items: model.items })
            : model.values;
        dialog.querySelectorAll('[data-receipt-value]').forEach(function (element) {
            element.textContent = values[element.dataset.receiptValue] || '';
        });
        dialog.querySelector('[data-receipt-dates]').textContent = formatDates(model.years);
        dialog.querySelector('[data-receipt-total]').textContent = app.formatCurrency(model.total);
        dialog.querySelector('[data-receipt-count]').textContent = app.formatInteger(model.items);
        dialog.querySelector('[data-receipt-length]').textContent = formatLength(totalLengthMm(model));
        dialog.querySelector('[data-receipt-invest]').textContent = app.formatCurrency(invested(model));

        view.lines.style.height = model.rowCount * LINE_PX + 'px';
        view.window.replaceChildren();
        view.first = -1;
        view.last = -1;
    }

    function open(view) {
        const state = view.read();
        if (!state) return;

        view.model = buildModel(state);
        view.image = null;
        fill(view);

        view.dialog.showModal();
        view.scroller.scrollTop = 0;
        render(view);

        // The image is drawn ahead of time: phones only open the share sheet
        // straight from a tap, not after waiting for the image.
        const model = view.model;
        global.setTimeout(function () {
            if (view.model !== model) return;
            drawImage(view).toBlob(function (blob) {
                if (blob && view.model === model) view.image = new File([blob], IMAGE_NAME, { type: 'image/png' });
            }, 'image/png');
        }, 300);
    }

    // The receipt as a 4:5 picture for social media: the head of the
    // receipt, three purchases, the rest on one line and the totals.
    function drawImage(view) {
        const model = view.model;
        const dialog = view.dialog;
        const canvas = document.createElement('canvas');
        canvas.width = IMAGE_W;
        canvas.height = IMAGE_H;

        const ctx = canvas.getContext('2d');
        const mono = global.getComputedStyle(document.documentElement).getPropertyValue('--font-mono').trim() || 'monospace';
        const accent = global.getComputedStyle(dialog).getPropertyValue('--tool').trim() || '#a8530a';
        const inner = PAPER_W - PAPER_PAD * 2;
        const ops = [];

        function text(selector) {
            const element = dialog.querySelector(selector);
            return element ? element.textContent.trim() : '';
        }

        function setFont(size, weight) {
            ctx.font = (weight || 400) + ' ' + size + 'px ' + mono;
        }

        function fit(value, width) {
            if (ctx.measureText(value).width <= width) return value;
            let cut = value;
            while (cut.length > 1 && ctx.measureText(cut + '…').width > width) cut = cut.slice(0, -1);
            return cut + '…';
        }

        function center(value, size, weight, color, height) {
            ops.push({
                height: height,
                draw: function (x, y) {
                    // A long title gets smaller before it gets cut.
                    let fontSize = size;
                    setFont(fontSize, weight);
                    while (fontSize > size * 0.6 && ctx.measureText(value).width > inner) {
                        fontSize -= 2;
                        setFont(fontSize, weight);
                    }
                    ctx.fillStyle = color;
                    ctx.textAlign = 'center';
                    ctx.fillText(fit(value, inner), x + inner / 2, y + height / 2);
                }
            });
        }

        function row(label, value, options) {
            const size = options.size || 28;
            ops.push({
                height: options.height || 46,
                draw: function (x, y) {
                    const middle = y + (options.height || 46) / 2;
                    if (options.highlight) {
                        ctx.save();
                        ctx.globalAlpha = 0.22;
                        ctx.fillStyle = accent;
                        ctx.fillRect(x - 12, y + 2, inner + 24, (options.height || 46) - 4);
                        ctx.restore();
                    }

                    setFont(options.valueSize || size, options.weight);
                    ctx.fillStyle = options.color || INK;
                    ctx.textAlign = 'right';
                    ctx.fillText(value, x + inner, middle);
                    const valueWidth = ctx.measureText(value).width;

                    setFont(size, options.weight);
                    ctx.textAlign = 'left';
                    ctx.fillText(fit(label, inner - valueWidth - 24), x, middle);
                }
            });
        }

        function rule(double) {
            ops.push({
                height: 30,
                draw: function (x, y) {
                    ctx.strokeStyle = double ? INK : INK_FAINT;
                    ctx.lineWidth = 2;
                    ctx.setLineDash(double ? [] : [10, 8]);
                    const lines = double ? [y + 12, y + 18] : [y + 15];
                    lines.forEach(function (lineY) {
                        ctx.beginPath();
                        ctx.moveTo(x, lineY);
                        ctx.lineTo(x + inner, lineY);
                        ctx.stroke();
                    });
                    ctx.setLineDash([]);
                }
            });
        }

        center(text('.receipt-brand'), 30, 700, INK, 46);
        center(text('.receipt-title'), 42, 700, INK, 60);
        center(text('[data-receipt-dates]'), 24, 400, INK_FAINT, 40);
        rule(false);
        dialog.querySelectorAll('.receipt-head .receipt-row').forEach(function (element) {
            row(element.querySelector('dt').textContent.trim(), element.querySelector('dd').textContent.trim(), { size: 26, height: 42 });
        });
        rule(false);

        const first = model.sections[0];
        const shown = Math.min(3, first.rows);
        for (let k = 0; k < shown; k++) {
            const line = model.source.line(first, k);
            row(line.label, line.text, { size: 28 });
        }
        const rest = model.items - shown;
        if (rest > 0) {
            const restAmount = model.total - model.source.amountOf(first, shown);
            row(model.item + ' × ' + app.formatInteger(rest), app.formatCurrency(restAmount), { size: 28 });
        }
        rule(true);

        dialog.querySelectorAll('.receipt-foot .receipt-row').forEach(function (element) {
            const style = FOOT_STYLES.find(function (entry) {
                return element.classList.contains('receipt-row--' + entry.name);
            }) || FOOT_STYLES[FOOT_STYLES.length - 1];
            row(element.querySelector('dt').textContent.trim(), element.querySelector('dd').textContent.trim(), style);
        });
        rule(false);
        center(text('.receipt-thanks'), 26, 700, INK, 46);

        const contentH = ops.reduce(function (sum, op) { return sum + op.height; }, 0);
        const paperH = contentH + PAPER_PAD * 2;
        const paperX = (IMAGE_W - PAPER_W) / 2;
        const paperY = Math.round((IMAGE_H - paperH) / 2);

        ctx.fillStyle = accent;
        ctx.fillRect(0, 0, IMAGE_W, IMAGE_H);

        ctx.save();
        ctx.shadowColor = 'rgba(0, 0, 0, 0.28)';
        ctx.shadowBlur = 40;
        ctx.shadowOffsetY = 16;
        ctx.fillStyle = PAPER;
        paperPath(ctx, paperX, paperY, PAPER_W, paperH);
        ctx.fill();
        ctx.restore();

        ctx.textBaseline = 'middle';
        let y = paperY + PAPER_PAD;
        ops.forEach(function (op) {
            op.draw(paperX + PAPER_PAD, y);
            y += op.height;
        });

        return canvas;
    }

    // A strip of paper with torn, zigzag top and bottom edges.
    function paperPath(ctx, x, top, width, height) {
        const teeth = Math.round(width / TOOTH_W);
        const step = width / teeth;
        const depth = step / 2;

        ctx.beginPath();
        ctx.moveTo(x, top);
        for (let i = 0; i < teeth; i++) {
            ctx.lineTo(x + step * (i + 0.5), top - depth);
            ctx.lineTo(x + step * (i + 1), top);
        }
        ctx.lineTo(x + width, top + height);
        for (let i = teeth - 1; i >= 0; i--) {
            ctx.lineTo(x + step * (i + 0.5), top + height + depth);
            ctx.lineTo(x + step * i, top + height);
        }
        ctx.closePath();
    }

    function download(view, file, button) {
        const url = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = url;
        link.download = file.name;
        // Inside the dialog: everything outside a modal dialog is inert.
        view.dialog.appendChild(link);
        link.click();
        link.remove();
        global.setTimeout(function () {
            URL.revokeObjectURL(url);
        }, 10000);
        app.UI.flashLabel(button, t('receipt.saved'));
    }

    function shareImage(view, button) {
        const file = view.image;

        if (!file) {
            drawImage(view).toBlob(function (blob) {
                if (blob) download(view, new File([blob], IMAGE_NAME, { type: 'image/png' }), button);
            }, 'image/png');
            return;
        }

        if (coarsePointer.matches && navigator.canShare && navigator.canShare({ files: [file] })) {
            navigator.share({ files: [file], text: t('share.calculatedWith') }).catch(function (error) {
                if (error.name !== 'AbortError') download(view, file, button);
            });
            return;
        }

        download(view, file, button);
    }

    // options.read returns what to print, or null when the calculator has no
    // result. A habit is { item, price, perYear }: the same purchase again and
    // again. A list is { item, lines }: one year of { label, amount } lines.
    // `item` names the purchases ("Coffee × 2,077"). `values` fills the
    // [data-receipt-value] fields; it can be a function of the receipt's
    // { total, items }.
    function bind(options) {
        const dialog = options.dialog;
        if (!options.button || !dialog) return;

        const view = {
            dialog: dialog,
            read: options.read,
            scroller: dialog.querySelector('[data-receipt-scroll]'),
            lines: dialog.querySelector('[data-receipt-lines]'),
            window: document.createElement('div'),
            progress: {
                year: dialog.querySelector('[data-receipt-progress="year"]'),
                length: dialog.querySelector('[data-receipt-progress="length"]'),
                amount: dialog.querySelector('[data-receipt-progress="amount"]')
            },
            model: null,
            image: null,
            first: -1,
            last: -1,
            frame: 0
        };

        view.window.className = 'receipt-window';
        view.lines.style.setProperty('--line-h', LINE_PX + 'px');
        view.lines.appendChild(view.window);

        options.button.addEventListener('click', function () {
            open(view);
        });

        view.scroller.addEventListener('scroll', function () {
            scheduleRender(view);
        }, { passive: true });
        global.addEventListener('resize', function () {
            if (dialog.open) scheduleRender(view);
        });

        dialog.querySelector('[data-receipt-close]').addEventListener('click', function () {
            dialog.close();
        });

        // A click on the backdrop lands on the dialog itself.
        dialog.addEventListener('click', function (event) {
            if (event.target === dialog) dialog.close();
        });

        dialog.addEventListener('close', function () {
            view.window.replaceChildren();
            view.first = -1;
            view.last = -1;
        });

        dialog.querySelector('[data-receipt-skip]').addEventListener('click', function () {
            view.scroller.scrollTo({
                top: view.scroller.scrollHeight,
                behavior: reducedMotion.matches ? 'auto' : 'smooth'
            });
            dialog.querySelector('[data-receipt-foot]').focus({ preventScroll: true });
        });

        const imageButton = dialog.querySelector('[data-receipt-image]');
        imageButton.addEventListener('click', function () {
            shareImage(view, imageButton);
        });
    }

    // A setting as the person typed it: 4, 4.5 or 4.25 cups a week.
    function formatSetting(value) {
        const digits = Math.min(2, (String(value).split('.')[1] || '').length);
        return app.formatNumber(value, digits);
    }

    app.Receipt = { bind: bind, formatSetting: formatSetting };
})(window);
