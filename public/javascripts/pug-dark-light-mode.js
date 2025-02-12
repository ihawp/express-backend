function isDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

if (!isDarkMode()) {
    const root = document.documentElement;
    const wow = getComputedStyle(root).getPropertyValue('--1');
}
