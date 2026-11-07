const btnEl = document.querySelector("#formatToggle");
const dateEl = document.querySelector("#date");
const time = document.querySelector(".time-display");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");



let hours, minutes, seconds, year, day, date, month;

const render = () => {
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
  dateEl.textContent= `${month}  ${date}, ${day}, ${year}`;
  
  
};
const months= ["January","February","March","April","May","June","July","August","September","October","November","December"]

const days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const getTime = () => {
  const now = new Date();

  minutes = String(now.getMinutes()).padStart(2, "0");

  hours = String(now.getHours()).padStart(2, "0");

  seconds = String(now.getSeconds()).padStart(2, "0");

  day= days[now.getDay()]

  year= now.getFullYear()

  date= now.getDate()
  month= months[now.getMonth()]
};

setInterval(() => {
  
  getTime();
  render();
}, 1000);
getTime()
render()