let digitalElement = document.querySelector(".digital");
let secondElement = document.querySelector(".second");
let minuteElement = document.querySelector(".minute");
let hourElement = document.querySelector(".hour");

function updateClock(){
    let now = new Date();
    let second = now.getSeconds();
    let minute = now.getMinutes();
    let hour = now.getHours();

    let secondDeg = (360 / 60) * second;
    let minuteDeg = (360 / 60) * minute + (6 / 60) * second; //360/60 dá 6 graus, 6 graus / 60 min dá 0.1 graus por segundo
    let hourDeg = (360 / 12) * hour + (30 / 60) * minute; //1h 30 graus e 1h 60 minutos, 
    //Se são 3:30 cada min move 0.5 graus, então 0.5 x 20 min = 10 graus ou seja 0.5 * minute

    secondElement.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    minuteElement.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    hourElement.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
}

function fixZero(time){
    return time < 10 ? `0${time}` : time;
}

updateClock();

setInterval(updateClock, 1000);