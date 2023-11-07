const textElement = document.getElementById('text');
const redButton = document.getElementById('redButton');
const blueButton = document.getElementById('blueButton');
const hideButton = document.getElementById('hideButton');
const showButton = document.getElementById('showButton');
const increaseSizeButton = document.getElementById('increaseSizeButton');
const changeBackgroundColorButton = document.getElementById('changeBackgroundColorButton');
const changeTextColorButton = document.getElementById('changeTextColorButton');

let firstName = "ivan";
let age = 18;

if(age >= 18){
    console.log(`vous pouvez rentrer ${firstName} vous allez bien `)
}

redButton.addEventListener('click', () => {
    textElement.style.color = 'red';
});

blueButton.addEventListener('click', () => {
    textElement.style.color = 'blue';
});

hideButton.addEventListener('click', () => {
    textElement.style.display = 'none';
    showButton.style.display = 'inline-block';
});

showButton.addEventListener('click', () => {
    textElement.style.display = 'block';
    showButton.style.display = 'none';
});

increaseSizeButton.addEventListener('click', () => {
    const currentSize = window.getComputedStyle(textElement, null).getPropertyValue('font-size');
    const newSize = (parseFloat(currentSize) * 1.2) + 'px';
    textElement.style.fontSize = newSize;
});

changeBackgroundColorButton.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    textElement.style.backgroundColor = randomColor;
});

changeTextColorButton.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    textElement.style.color = randomColor;
});

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const timerElement = document.getElementById('timer');
let timer;
let seconds = 0;
let minutes = 0;

function startChronometer() {
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        updateTimerDisplay();
    }, 1000);
}

function stopChronometer() {
    clearInterval(timer);
    stopButton.disabled = true;
    startButton.disabled = false;
}

function updateTimerDisplay() {
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

startButton.addEventListener('click', () => {
    startChronometer();
    startButton.disabled = true;
    stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
    stopChronometer();
});


