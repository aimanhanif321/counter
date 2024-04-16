
const INCREASE = document.getElementById('INCREASE');
const RESET = document.getElementById('RESET');
const DECREASE = document.getElementById('DECREASE');
const counter = document.getElementById('counter');

let count = 0;

INCREASE.onclick = function(){
    count ++;
    counter.textContent = count;
}
RESET.onclick = function(){
    count = 0;
    counter.textContent = count;
}
DECREASE.onclick = function(){
    count --;
    counter.textContent = count;
}

