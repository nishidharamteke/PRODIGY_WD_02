// script.js

let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');
let lapBtn = document.getElementById('lap');
let lapsList = document.getElementById('laps');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  let minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  let seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function updateTimer() {
  elapsedTime = Date.now() - startTime;
  timerDisplay.textContent = formatTime(elapsedTime);
}

startBtn.addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 100);
  }
});

pauseBtn.addEventListener('click', () => {
  isRunning = false;
  clearInterval(timerInterval);
});

resetBtn.addEventListener('click', () => {
  isRunning = false;
  clearInterval(timerInterval);
  elapsedTime = 0;
  timerDisplay.textContent = '00:00:00';
  lapsList.innerHTML = '';
});

lapBtn.addEventListener('click', () => {
  if (isRunning) {
    const lapTime = document.createElement('li');
    lapTime.textContent = `Lap: ${formatTime(elapsedTime)}`;
    lapsList.appendChild(lapTime);
  }
});
