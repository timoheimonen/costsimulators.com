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

// Loaded in <head> after the hreflang links. English pages open in the
// visitor's own language: a language picked from the menu earlier wins,
// otherwise the first browser language the site has a page for. The
// supported languages are read from the page's hreflang links, so adding a
// language needs no change here.
(function () {
    'use strict';

    const STORAGE_KEY = 'costsimulators-lang';
    const root = document.documentElement;

    function readStoredLang() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (error) {
            return null;
        }
    }

    function storeLang(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (error) {
            return;
        }
    }

    function alternate(lang) {
        return document.querySelector('link[rel="alternate"][hreflang="' + lang + '"]');
    }

    // The hreflang of the site version for a browser language such as
    // "de-AT" or "zh-TW". Norwegian Bokmål and Nynorsk share the Norwegian
    // version; Chinese in Taiwan, Hong Kong and Macau, or written in
    // traditional characters, gets the traditional Chinese version.
    function siteLang(tag) {
        const parts = String(tag).toLowerCase().split(/[-_]/);
        const code = parts[0];

        if (code === 'nb' || code === 'nn') return 'no';
        if (code === 'zh') {
            const traditional = parts.indexOf('hant') !== -1 || (parts.indexOf('hans') === -1 &&
                (parts.indexOf('tw') !== -1 || parts.indexOf('hk') !== -1 || parts.indexOf('mo') !== -1));
            return traditional ? 'zh-Hant' : 'zh';
        }
        return code;
    }

    function browserLang() {
        const preferred = navigator.languages && navigator.languages.length
            ? navigator.languages
            : [navigator.language || 'en'];

        for (let i = 0; i < preferred.length; i++) {
            const code = siteLang(preferred[i]);
            if (code === 'en' || alternate(code)) return code;
        }
        return null;
    }

    function redirectToPreferred() {
        if (root.lang !== 'en') return;

        const stored = readStoredLang();
        const lang = stored && alternate(stored) ? stored : browserLang();
        if (!lang || lang === 'en') return;

        const link = alternate(lang);
        const target = new URL(link.getAttribute('href'), location.href).pathname;
        if (target !== location.pathname) location.replace(target + location.search + location.hash);
    }

    function bindMenu(menu) {
        const summary = menu.querySelector('summary');
        const links = Array.from(menu.querySelectorAll('a[hreflang]'));

        function focusLink(index) {
            const count = links.length;
            links[((index % count) + count) % count].focus();
        }

        function close() {
            menu.open = false;
            summary.focus();
        }

        menu.addEventListener('click', function (event) {
            const link = event.target.closest('a[hreflang]');
            if (!link) return;

            // Keep the tool settings when switching language.
            storeLang(link.getAttribute('hreflang'));
            link.href = link.getAttribute('href').split(/[?#]/)[0] + location.search + location.hash;
        });

        document.addEventListener('click', function (event) {
            if (menu.open && !menu.contains(event.target)) menu.open = false;
        });

        // Tab moves through the languages as usual; the arrow keys, Home and
        // End also work, and Escape or leaving the menu closes it.
        menu.addEventListener('keydown', function (event) {
            if (!menu.open) return;
            const index = links.indexOf(document.activeElement);
            const rows = Math.ceil(links.length / 2);
            const current = links.findIndex(function (link) {
                return link.hasAttribute('aria-current');
            });

            if (event.key === 'Escape') {
                close();
            } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                const step = event.key === 'ArrowDown' ? 1 : -1;
                focusLink(index === -1 ? Math.max(current, 0) : index + step);
            } else if ((event.key === 'ArrowRight' || event.key === 'ArrowLeft') && index !== -1 && links.length > 8) {
                const target = index + (event.key === 'ArrowRight' ? rows : -rows);
                if (target < 0 || target >= links.length) return;
                focusLink(target);
            } else if (event.key === 'Home' && index !== -1) {
                focusLink(0);
            } else if (event.key === 'End' && index !== -1) {
                focusLink(links.length - 1);
            } else {
                return;
            }
            event.preventDefault();
        });

        menu.addEventListener('focusout', function (event) {
            if (menu.open && event.relatedTarget && !menu.contains(event.relatedTarget)) menu.open = false;
        });
    }

    redirectToPreferred();

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('[data-lang-menu]').forEach(bindMenu);
    });
})();
