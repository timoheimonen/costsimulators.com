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

    const STORAGE_KEY = 'costsimulators-theme';
    const THEME_COLORS = { light: '#f5f6f8', dark: '#0c0e12' };
    const root = document.documentElement;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    function readStoredTheme() {
        try {
            const value = localStorage.getItem(STORAGE_KEY);
            return value === 'light' || value === 'dark' ? value : null;
        } catch (error) {
            return null;
        }
    }

    function storeTheme(theme) {
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (error) {
            return;
        }
    }

    function systemTheme() {
        return systemDark.matches ? 'dark' : 'light';
    }

    function applyTheme(theme) {
        root.dataset.theme = theme;

        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', THEME_COLORS[theme]);

        const label = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
        document.querySelectorAll('[data-theme-toggle]').forEach(function (button) {
            button.setAttribute('aria-label', label);
            button.setAttribute('title', label);
        });
    }

    function toggleTheme() {
        const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
        storeTheme(next);

        if (document.startViewTransition && !reducedMotion.matches) {
            const transition = document.startViewTransition(function () {
                applyTheme(next);
            });
            transition.ready.catch(function () { });
        } else {
            applyTheme(next);
        }
    }

    applyTheme(readStoredTheme() || systemTheme());

    systemDark.addEventListener('change', function () {
        if (!readStoredTheme()) applyTheme(systemTheme());
    });

    document.addEventListener('DOMContentLoaded', function () {
        applyTheme(root.dataset.theme);
        document.querySelectorAll('[data-theme-toggle]').forEach(function (button) {
            button.addEventListener('click', toggleTheme);
        });
    });
})();
