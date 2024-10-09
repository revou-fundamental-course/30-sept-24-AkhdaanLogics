console.log('Javascript Berhasil Dikaitkan');

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
    if (value !== '') {
        let result = (value * 9/5) + 32;
        document.getElementById('fahrenheit').value = result + ' °F';
        document.getElementById('rumus').innerText = value + '°C * (9/5) + 32 = ' + result + ' °F';
        document.getElementById('calculation').style.display = 'block';
    }
}


function reset() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('rumus').innerText = '';
    document.getElementById('calculation').style.display = 'none';
}