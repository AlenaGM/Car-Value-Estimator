let modelPrice = 0;
let yearPrice = 1;
let mileagePrice = 0;

const formatter = new Intl.NumberFormat('ru');

const selects = document.querySelectorAll('select')
const inputs = document.querySelectorAll('input')

// селекты

document.getElementById('carModel').addEventListener('change', function() {
    modelPrice = this.value;
});


document.getElementById('carYear').addEventListener('change', function() {
    yearPrice = this.value;
});

document.getElementById('mileage').addEventListener('change', function() {;
    mileagePrice = this.value*10;
    console.log (mileagePrice);
});

// радио кнопки
const radioMotor = document.querySelectorAll('input[name="motor"]');
const radioTransmission = document.querySelectorAll('input[name="transmission"]');
const radioGearbox = document.querySelectorAll('input[name="gearbox"]');


// чекбоксы
const powerSteering = document.getElementById('powerSteering');
const audioSystem = document.getElementById('audioSystem');
const tripComputer = document.getElementById('tripComputer');
const parkingSensor = document.getElementById('parkingSensor');
const rearСamera = document.getElementById('rearСamera');
const climateControl = document.getElementById('climateControl');
const cruiseControl = document.getElementById('cruiseControl');
const infotainment = document.getElementById('infotainment');
const rearWindowHeating = document.getElementById('rearWindowHeating');
const windscreenHeating = document.getElementById('windscreenHeating');
const mirrorsHeating = document.getElementById('mirrorsHeating');
const seatsHeating = document.getElementById('seatsHeating');
const parkingAssist = document.getElementById('parkingAssist');
const remoteStart = document.getElementById('remoteStart');

function calculate() {
    let totalPrice = modelPrice * yearPrice - mileagePrice;


    for (const radio of radioMotor) {
        if (radio.checked === true) {
            totalPrice = totalPrice * radio.value;
        }
    }

    for (const transmission of radioTransmission) {
        if (transmission.checked === true) {
            totalPrice = totalPrice * transmission.value;
        }
    }

    for (const gearbox of radioGearbox) {
        if (gearbox.checked === true) {
            totalPrice = totalPrice * gearbox.value;
        }
    }

    if (powerSteering.checked === true) {
        totalPrice = totalPrice + +powerSteering.value;
    }

    if (audioSystem.checked === true) {
        totalPrice = totalPrice + +audioSystem.value;
    }

    if (tripComputer.checked === true) {
        totalPrice = totalPrice + +tripComputer.value;
    }

    if (parkingSensor.checked === true) {
        totalPrice = totalPrice + +parkingSensor.value;
    }

    if (rearСamera.checked === true) {
        totalPrice = totalPrice + +rearСamera.value;
    }

    if (climateControl.checked === true) {
        totalPrice = totalPrice + +climateControl.value;
    }

    if (cruiseControl.checked === true) {
        totalPrice = totalPrice + +cruiseControl.value;
    }

    if (infotainment.checked === true) {
        totalPrice = totalPrice + +infotainment.value;
    }

    if (rearWindowHeating.checked === true) {
        totalPrice = totalPrice + +rearWindowHeating.value;
    }

    if (windscreenHeating.checked === true) {
        totalPrice = totalPrice + +windscreenHeating.value;
    }

    if (mirrorsHeating.checked === true) {
        totalPrice = totalPrice + +mirrorsHeating.value;
    }

    if (seatsHeating.checked === true) {
        totalPrice = totalPrice + +seatsHeating.value;
    }

    if (parkingAssist.checked === true) {
        totalPrice = totalPrice + +parkingAssist.value;
    }

    if (remoteStart.checked === true) {
        totalPrice = totalPrice + +remoteStart.value;
    }

    document.getElementById('totalPrice').innerHTML = 'Стоимость машины ' + formatter.format(totalPrice) + ' руб.';
}


for (const input of inputs) {
    input.addEventListener('input', function () {
       calculate();
    })
}

for (const select of selects) {
    select.addEventListener('select', function () {
       calculate();
    })
}
