const kaitlentestructuraDOM = document.getElementById('kaitlentestructura');
const mygtukastructuraDOM = document.getElementById('mygtukastructura');
const btnDOM = document.getElementById('btn');
const vklDOM = document.getElementById('vkl');

let countcircle = 1;
let HTML = '<div class="circle">1</div>';

function addCircle() {
    HTML += `<div class="circle">${++countcircle}</div>`;
    kaitlentestructuraDOM.innerHTML = HTML;
}
let countmygtuka = 1;
let HTML2 = '<button id="vkl" class="vkl">1</button>';
function addMygtuka() {
    HTML2 += `<button id="vkl" class="vkl">${++countmygtuka}</button>`;
    mygtukastructuraDOM.innerHTML = HTML2;
}

btnDOM.addEventListener('click', function () {
    addMygtuka();
    addCircle();
});



function changeColorCircles() {
    const circleDOM = document.querySelector('.circle');
    circleDOM.style.backgroundColor = "red";
    circleDOM.style.transition = "background-color 2s ease"; 
    
}
vklDOM.addEventListener('click', changeColorCircles);