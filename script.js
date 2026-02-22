//pego o elemento raiz do relógio
let clock = document.querySelector(".clock");
//loop que percorre 12 itens correspondendo a 12 horas
    //crio a div raiz
    //add o css nessa div
    //transformo ela com o rotate a cada 30 graus
    //coloco a div como filha do elemento raiz
for(let i = 0; i < 12; i++){
    let line = document.createElement("div");
    
    line.classList.add("line");
    line.style.transform = `rotate(${30 * i}deg)`;

    clock.appendChild(line);
}
//chamo os elementos 
let elementHour = document.querySelector(".hour");
let elementMinute = document.querySelector(".minute");
let elementSecond = document.querySelector(".second");
let digital = document.querySelector(".digital");

//função de atualizar o relógio, chamo o new Date pego cada um s, m e h
//calculo o deg com o circulo e o tempo * pelo ponteiro atual
//pego o elemento uso o transform, botando o translate alinhado e o rotate com o calculo do deg
//pego o elemento e usando innerHtml uso o fix com o h, m e s
//30 graus por hora e 60 min 30/60 = 0.5 por min
//6 graus por min e 60 seg
function updateClock(){
    let data = new Date();
    let hour = data.getHours();
    let minute = data.getMinutes();
    let second = data.getSeconds();
    let mili = data.getMilliseconds();

    let hourDeg = (360 / 12) * hour + (30 / 60) * minute;
    let minuteDeg = (360 / 60) * minute + (6 / 60) * second;
    let secondDeg = (360 / 60) * second + (6 / 1000) * mili;

    elementHour.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    elementMinute.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    elementSecond.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;

    digital.textContent = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
}
    
//função fix para se o numero for menor que 10 botar um 0 na frente
const fixZero = (item) => item < 10 ? `0${item}` : item;
//chamo a função de atualizar o relógio
updateClock();
//intervalo infinito chamando a função de atualizar a cada 1 segundo
setInterval(updateClock, 10);