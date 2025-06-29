let startTime = 0;
let elapsedTime = 0;
let interval;
let isRunning = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

function timeToString(time) {
  const hrs = Math.floor(time / 3600000);
  const mins = Math.floor((time % 3600000) / 60000);
  const secs = Math.floor((time % 60000) / 1000);
  return (
    (hrs < 10 ? '0' + hrs : hrs) + ':' +
    (mins < 10 ? '0' + mins : mins) + ':' +
    (secs < 10 ? '0' + secs : secs)
  );
}

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    interval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      display.textContent = timeToString(elapsedTime);
    }, 1000);
    isRunning = true;
  }
}

function pause() {
  if (isRunning) {
    clearInterval(interval);
    isRunning = false;
  }
}

function reset() {
  clearInterval(interval);
  isRunning = false;
  elapsedTime = 0;
  display.textContent = '00:00:00';
  laps.innerHTML = '';
}

function lap() {
  if (isRunning) {
    const li = document.createElement('li');
    li.textContent = timeToString(elapsedTime);
    laps.appendChild(li);
  }
}

document.getElementById('startBtn').addEventListener('click', start);
document.getElementById('pauseBtn').addEventListener('click', pause);
document.getElementById('resetBtn').addEventListener('click', reset);
document.getElementById('lapBtn').addEventListener('click', lap);
