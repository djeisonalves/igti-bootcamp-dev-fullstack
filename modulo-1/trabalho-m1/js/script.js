window.addEventListener('load', start);

var inputRed = null,
inputGreen = null,
inputBlue = null,
rangeRed = null,
rangeGreen = null,
rangeBlue = null,
divCor = null;

function start(){
    inputRed = document.querySelector('#inputRed');
    inputGreen = document.querySelector('#inputGreen');
    inputBlue = document.querySelector('#inputBlue');

    rangeRed = document.querySelector('#rangeRed');
    rangeGreen = document.querySelector('#rangeGreen');
    rangeBlue = document.querySelector('#rangeBlue');

    rangeRed.addEventListener('input', setColor);
    rangeGreen.addEventListener('input', setColor);
    rangeBlue.addEventListener('input', setColor);

    divCor = document.querySelector('#cor');

    setColor();
}

function setColor(){
    var red = parseInt(rangeRed.value, 10);
    var green = parseInt(rangeGreen.value, 10);
    var blue = parseInt(rangeBlue.value, 10);

    inputRed.value = red;
    inputGreen.value = green;
    inputBlue.value = blue;

    var rgbCSS = 'rgb(' + red + ',' + green + ',' + blue + ')';

    divCor.style.backgroundColor = rgbCSS;

}
