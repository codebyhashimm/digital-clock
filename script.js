const btnEl= document.querySelector("#formatToggle")
const secondsEl= document.querySelector("#seconds")
const minutesEl= document.querySelector("#minutes")
const hoursEl= document.querySelector("#hours")
const dateDisplay= document.querySelector("#date")
const amPmEl= document.querySelector("#ampm")

let amPm;
const months=["January","February","March","April","May","June","July","August","September","October","November","December"]

const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

let year,date,month,day,seconds,minutes,hours;

function getTime(){
  const now= new Date()
  


   year= now.getFullYear()
   date= now.getDate()
   month= months[now.getMonth()]
   day= days[now.getDay()]


   seconds =String(now.getSeconds()).padStart(2,"0")
   minutes =String(now.getMinutes()).padStart(2,"0")
   hours =String(now.getHours()).padStart(2,"0")
   

   if (hours>=12){
    amPm="PM"
    amPmEl.textContent=amPm
   }else{
    amPm="AM"
    amPmEl.textContent=amPm
   }
   hours=hours%12||12
}

function render(){
 dateDisplay.textContent=`${month}, ${day} ${date}, ${year}`
  
 secondsEl.textContent= seconds
 minutesEl.textContent= minutes
 hoursEl.textContent= hours

}














setInterval(()=>{
  
 
getTime()
 

render()



},1000)
getTime()
render()
