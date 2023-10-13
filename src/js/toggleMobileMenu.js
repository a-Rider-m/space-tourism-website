const navBar = document.querySelector('.nav-bar');

export function toggleMobileMenu() {
    const isMobileMenuClosed = navBar.classList.contains("inactive");

    if (isMobileMenuClosed) {
        navBar.classList.toggle('inactive');
    }

    else if (!isMobileMenuClosed) {
        navBar.classList.add('inactive');
    }
}