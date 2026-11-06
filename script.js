const btnEl = document.querySelector("#formatToggle");
const dateEl = document.querySelector("#date");
const time = document.querySelector(".time-display");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");



let hours, minutes, seconds;

const render = () => {
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
};

const getTime = () => {
  const now = new Date();

  minutes = String(now.getMinutes()).padStart(2, "0");

  hours = String(now.getHours()).padStart(2, "0");

  seconds = String(now.getSeconds()).padStart(2, "0");
};

setInterval(() => {
  
  getTime();
  render();
}, 1000);

render()