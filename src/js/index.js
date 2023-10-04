import data from '../../data.json' assert {type: 'json'}


//Inicio funcion menú
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

//Termina funcion menú

const destinationButtons = document.querySelectorAll('.selection-buttons');

destinationButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        buttonSelected(e.target);
        info(e.target);
    })
})

const img = document.querySelector('#destination-img');
const nameInfo = document.querySelector('#destination-name');
const descripInfo = document.querySelector('#destination-descrip');
const distanceInfo = document.querySelector('#destination-dist');
const travelInfo = document.querySelector('#destination-time');

function info(button) {

    let informacion;

    if(button.value == 'MOON') {
        informacion = 0;
    } else if(button.value == 'MARS') {
        informacion = 1;
    } else if(button.value == 'EUROPA') {
        informacion = 2;
    } else if(button.value == 'TITAN') {
        informacion = 3;
    } else {
        informacion = 0;
    }

    console.log(informacion);

    img.src = `../.${data.destinations[informacion].images.png}`;
    nameInfo.innerText = data.destinations[informacion].name;
    descripInfo.innerText = data.destinations[informacion].description;
    distanceInfo.innerText = data.destinations[informacion].distance;
    travelInfo.innerText = data.destinations[informacion].travel;

}

function buttonSelected(button) {
    const buttonSelect = button;
    
    destinationButtons.forEach((e) => {
        e.classList.remove('buttons-select__button--active');
    })

    buttonSelect.classList.add('buttons-select__button--active');

}




