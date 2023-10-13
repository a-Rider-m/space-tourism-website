import data from '../../data.json' assert {type: 'json'}

const selectButtons = document.querySelectorAll('.selection-buttons');

const img = document.querySelector('#destination-img');
const nameInfo = document.querySelector('#destination-name');
const descripInfo = document.querySelector('#destination-descrip');
const distanceInfo = document.querySelector('#destination-dist');
const travelInfo = document.querySelector('#destination-time');

export function info(button) {

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

}


export function buttonSelected(button) {
    const screen = document.querySelector('title');
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