const kaitlentestructuraDOM = document.getElementById('kaitlentestructura');
const mygtukastructuraDOM = document.getElementById('mygtukastructura');



let countcircle = 0;
let HTML = ' ';
function addCircle() {
    HTML += `<div class="circle">${++countcircle}</div>`;
    kaitlentestructuraDOM.innerHTML = HTML;
}


let countmygtuka = 0;
let HTML2 = ' ';
function addMygtuka() {
    HTML2 += `<div class="vkl">${++countmygtuka}</div>`;
    mygtukastructuraDOM.innerHTML = HTML2;
}

btn.addEventListener('click', function () {
    addMygtuka();
    addCircle();
    const circleDOM = document.querySelectorAll('.circle');
    const vklDOM = document.querySelectorAll('.vkl');
    
        for (let i = 0; i < vklDOM.length; i++) {
            vklDOM[i].addEventListener('click', () => {
                vklDOM[i].classList.toggle('active');
                circleDOM[i].classList.toggle('active');
            });
        }


});


/*function changeColorCircle(circleIndex) {
    const circleDOMs = document.querySelectorAll('.circle');
    circleDOMs[circleIndex].style.backgroundColor = "red";
    circleDOMs[circleIndex].style.transition = "background-color 2s ease";
}


document.addEventListener('click', function (event) {
    if (event.target.classList.contains('vkl')) {
        const vklButtons = document.querySelectorAll('.vkl');
        const circleIndex = Array.from(vklButtons).indexOf(event.target);
        changeColorCircle(circleIndex);
        event.target.disabled = true; 
    }
});*/