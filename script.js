const input = document.querySelector('#user-input');
const convertBtn = document.querySelector('#convert-btn');

const lengthResult = document.querySelector('.length-result');
const volumeResult = document.querySelector('.volume-result');
const massResult = document.querySelector('.mass-result');

convertBtn.addEventListener('click', () => {
    if (input.value === '' || input.value <= 0) {
        alert('invalid input')
    } else {
        calcLength(input.value);
        calcVolume(input.value);
        calcMass(input.value);
    }
});

function calcLength(value) {
    value = Number(value);
    const feet = (value * 3.281).toFixed(3);
    const meters = (value / 3.281).toFixed(3);
    lengthResult.textContent = `${value} ${value === 1 ? 'meter' : 'meters'} = ${feet} feet | ${value} ${value === 1 ? 'foot' : 'feet'} = ${meters} meters`;
}

function calcVolume(value) {
    value = Number(value);
    const gallons = (value * 0.264).toFixed(3);
    const litres = (value / 0.264).toFixed(3);
    volumeResult.textContent = `${value} ${value === 1 ? 'liter' : 'liters'} = ${gallons} gallons | ${value} ${value === 1 ? 'gallon' : 'gallons'} = ${litres} liters`;
}

function calcMass(value) {
    value = Number(value);
    const pounds = (value * 2.204).toFixed(3);
    const kilos = (value / 2.204).toFixed(3);
    massResult.textContent = `${value} ${value === 1 ? 'kilo' : 'kilos'} = ${pounds} pounds | ${value} ${value === 1 ? 'pound' : 'pounds'} = ${kilos} kilos`
}

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/