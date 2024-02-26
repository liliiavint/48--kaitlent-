
const kaitlentestructuraDOM = document.getElementById('kaitlentestructura');
const mygtukastructuraDOM = document.getElementById('mygtukastructura');
const btnDOM = document.getElementById('btn');
const vklDOM = document.getElementById('vkl');
const circlesDOM = document.querySelectorAll('.circle');

let HTML = ' ';
function addCircle() {
    
    HTML += `<div id="circle" class="circle"></div>`;
    kaitlentestructuraDOM.innerHTML = HTML;
}
let HTML2 = ' ';
function addMygtuka() {
    
    HTML2 += `<button id="vkl" class="vkl">*</button>`;
    mygtukastructuraDOM.innerHTML = HTML2;
}
function changeColorCircles() {
   circlesDOM.forEach(circle => {
        circle.style.backgroundColor = "red";
    });
}

btnDOM.addEventListener('click', function () {
    addMygtuka();
    addCircle();
});

vklDOM.addEventListener('click', changeColorCircles);
