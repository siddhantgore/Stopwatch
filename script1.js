const start = document.getElementById('start');
const sto = document.getElementById('stop');
start.addEventListener('click', update);

let count = 0;

function time() {
    const ele = document.querySelector('div');
    let date = new Date();
    let time = date.toLocaleTimeString();
    count = +count + 1;
    ele.textContent = count+" s";
}
let stopwatch;
function update() {
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    stopwatch = setInterval(time, 1000);
};

function stopCount() {
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    clearInterval(stopwatch);
    count = 0;
}

sto.addEventListener('click', stopCount);
