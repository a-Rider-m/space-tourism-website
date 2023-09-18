const burgerMobileButton = document.querySelector('.header__burger-button');
const closeMobileButton = document.querySelector('.nav-bar__close-button');
const navBar = document.querySelector('.nav-bar');

burgerMobileButton.addEventListener('click', toggleMobileMenu);
closeMobileButton.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    const isMobileMenuClosed = navBar.classList.contains("inactive");

    if (isMobileMenuClosed) {
        navBar.classList.toggle('inactive');
    }

    else if (!isMobileMenuClosed) {
        navBar.classList.add('inactive');
    }
}