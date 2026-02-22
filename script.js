//pego o elemento raiz do relógio
let clock = document.querySelector(".clock");
//loop que percorre 12 itens correspondendo a 12 horas
for(let i = 0; i < 12; i++){
    //crio a div raiz
    let line = document.createElement("div");
    //add o css nessa div
    line.classList.add("line");
    //transformo ela com o rotate a cada 30 graus
    line.style.transform = `translateX(-50%) rotate(${i * 30}deg)`;
    //coloco a div como filha do elemento raiz
    clock.appendChild(line);
}

//chamo os elementos 
let hourElement = document.querySelector(".hour");
let minuteElement = document.querySelector(".minute");
let secondElement = document.querySelector(".second");
let digitalElement = document.querySelector(".digital");

//função de atualizar o relógio, chamo o new Date pego cada um s, m e h
//calculo o deg com o circulo e o tempo * pelo ponteiro atual
//pego o elemento uso o transform, botando o translate alinhado e o rotate com o calculo do deg
//pego o elemento e usando innerHtml uso o fix com o h, m e s
function updateClock(){
    let data = new Date();
    let hour = data.getHours();
    let minute = data.getMinutes();
    let second = data.getSeconds();

    let hourDeg = (360 / 12) * hour + 0.5 * minute; //30 graus por hora e 60 min 30/60 = 0.5 por min
    let minuteDeg = (360 / 60) * minute + (6 / 60) * second; //6 graus por min e 60 seg
    let secondDeg = (360 / 60) * second;

    hourElement.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    minuteElement.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    secondElement.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
}

//função fix para se o numero for menor que 10 botar um 0 na frente
function fixZero(data){
    if(data < 10){
        return `0${data}`;
    }else{
        return data;
    }
}
//chamo a função de atualizar o relógio
updateClock();
//intervalo infinito chamando a função de atualizar a cada 1 segundo
setInterval(updateClock, 1000);