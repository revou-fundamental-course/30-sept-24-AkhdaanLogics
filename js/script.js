let celsiusKeFahrenheit = true;
function convert() {
 
    const inputSuhu = document.getElementById('celsius').value;

    if (inputSuhu == '') {
        alert('Mohon Isi Suhu Dulu');
    }

    else {
        calculate(inputSuhu);
    }
}

function calculate(value) {
    let result;
    if (celsiusKeFahrenheit) {
        result = (value * 9/5) + 32;
        document.getElementById('fahrenheit').value = result + ' °F';
        document.getElementById('rumus').innerText = value + '°C * (9/5) + 32 = ' + result + ' °F';
    }
    else {
        result = (value - 32) * 5/9;
        document.getElementById('fahrenheit').value = result;
        document.getElementById('rumus').innerText = value + '°F - 32 * (5/9) = ' + result + '°C';
    }
    document.getElementById('calculation').style.display = 'block';
}


function reset() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('rumus').innerText = '';
    document.getElementById('calculation').style.display = 'none';
}

function reverse() {
    celsiusKeFahrenheit = !celsiusKeFahrenheit;
    reset();

    if (celsiusKeFahrenheit) {
        document.getElementById('conversionText').innerText = 'Cara Konversi Dari Celcius ke Fahrenheit:';
        document.querySelector('label[for="celsius"]').innerText = 'Celsius (°C):';
        document.querySelector('label[for="fahrenheit"]').innerText = 'Fahrenheit (°F):';
    }
    else {
        document.getElementById('conversionText').innerText = 'Cara Konversi Dari Fahrenheit ke Celcius:';
        document.querySelector('label[for="celsius"]').innerText = 'Fahrenheit (°F):';
        document.querySelector('label[for="fahrenheit"]').innerText = 'Celsius (°C):';
    }
    
}