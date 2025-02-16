// ihawp
// functional mobile navigation with classes

let mobileNavButton = document.getElementById('open-mobile-nav');
let mobileNav = document.getElementById('mobile-nav');

mobileNavButton.addEventListener('click', () => {
    if (mobileNav.classList.contains('display-sm')) {
        mobileNavButton.innerText = 'X';
        mobileNav.classList.remove('display-sm');
    } else {
        mobileNavButton.innerText = '|||';
        mobileNav.classList.add('display-sm');
    }
});