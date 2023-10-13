import { toggleMobileMenu } from './toggleMobileMenu.js';
import { info, buttonSelected} from './fetchDataFromAPI.js'; 

const burgerMobileButton = document.querySelector('.header__burger-button');
const closeMobileButton = document.querySelector('.nav-bar__close-button');

const selectButtons = document.querySelectorAll('.selection-buttons');

burgerMobileButton.addEventListener('click', toggleMobileMenu);
closeMobileButton.addEventListener('click', toggleMobileMenu);

selectButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        buttonSelected(e.target);
        info(e.target);
    })
});