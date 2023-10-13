import data from '../../data.json' assert {type: 'json'}

const selectButtons = document.querySelectorAll('.selection-buttons');
const screen = document.querySelector('title');

const img = document.querySelector('#img');
const nameInfo = document.querySelector('#info-title');
const crewRol = document.querySelector('#crew-rol');
const descripInfo = document.querySelector('#info');
const distanceInfo = document.querySelector('#distance');
const travelInfo = document.querySelector('#travel-time');

let buttonPosition = 0;

selectButtons.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        
        buttonPosition = index;
        console.log(buttonPosition)

    });
});

export function info(button) {

    if(screen.text === 'Destination') {
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
      
        img.src = `../.${data.destinations[informacion].images.png}`;
        nameInfo.innerText = data.destinations[informacion].name;
        descripInfo.innerText = data.destinations[informacion].description;
        distanceInfo.innerText = data.destinations[informacion].distance;
        travelInfo.innerText = data.destinations[informacion].travel;

    } else if(screen.text === 'Crew') {
        let informacion = 0;

        if(buttonPosition == 0) {
            informacion = 0;
        } else if(buttonPosition == 1) {
            informacion = 1;
        } else if(buttonPosition == 2) {
            informacion = 2;
        } else if(buttonPosition == 3) {
            informacion = 3;
        } else {
            informacion = 0;
        }

        img.src = `../.${data.crew[informacion].images.png}`;
        nameInfo.innerText = data.crew[informacion].name;
        crewRol.innerText = data.crew[informacion].role;
        descripInfo.innerText = data.crew[informacion].bio;

        
    } else if(screen.text === 'Technology') {
        let informacion = 0;

        if(button.value == '1') {
            informacion = 0;
        } else if(button.value == '2') {
            informacion = 1;
        } else if(button.value == '3') {
            informacion = 2;
        } else {
            informacion = 0;
        }

        img.src = `../.${data.technology[informacion].images.landscape}`;
        nameInfo.innerText = data.technology[informacion].name;
        descripInfo.innerText = data.technology[informacion].description;
    }

}

export function buttonSelected(button) {
    
    const buttonSelect = button;

    if(screen.text === 'Destination') {
        selectButtons.forEach((e) => {
            e.classList.remove('buttons-select__text-button--active');
        })
        
        buttonSelect.classList.add('buttons-select__text-button--active');
    } else if (screen.text === 'Technology') {
        selectButtons.forEach((e) => {
            e.classList.remove('buttons-select__circle-number--active');
        })
        
        buttonSelect.classList.add('buttons-select__circle-number--active');
    } else if(screen.text === 'Crew') {
        selectButtons.forEach((e) => {
            e.classList.remove('buttons-select__circle--active');
        })
        
        buttonSelect.classList.add('buttons-select__circle--active');
    }

}