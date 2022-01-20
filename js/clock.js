const clockId = document.querySelector("#clock");
const clockMonth = clockId.querySelector("#month");
const clockDate = clockId.querySelector("#date");
const clockTime = clockId.querySelector("#time");

const weekId = document.querySelector("#week");

const arrDayStr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const arrMonthStr = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

const spanBording = document.createElement("span");
spanBording.innerText = '|';

function getClock(){
    const date = new Date();
    const day = date.getDate();
    const week = date.getDay();
    const month = date.getMonth();
    const hours = stringRept(date.getHours());
    const minutes = stringRept(date.getMinutes());
    const seconds = stringRept(date.getSeconds());
    
    weekId.innerText = `${arrDayStr[week].toUpperCase()}`;
    
    clockMonth.innerText = `${arrMonthStr[month].toUpperCase()}`;
    clockDate.innerText =`${day}`;
    clockDate.appendChild(spanBording);
    clockTime.innerText =`${hours}:${minutes}:${seconds}`;
}

function stringRept(string){
    return String(string).padStart(2,"0");
}

getClock();
setInterval(getClock, 1000);
