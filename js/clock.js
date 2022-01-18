const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = stringRept(date.getHours());
    const minutes = stringRept(date.getMinutes());
    const seconds = stringRept(date.getSeconds());
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

function stringRept(string){
    return String(string).padStart(2,"0");
}

getClock();
setInterval(getClock, 1000);
