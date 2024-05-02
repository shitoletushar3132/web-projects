const container = document.getElementById('container');
const SQUARES = 10000;
function random(){
    return Math.floor(Math.random()*255+1);
}


for(let i = 0; i < SQUARES; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    
    square.addEventListener('mouseover',()=>{
        setColor(square)
    })

    square.addEventListener('mouseout',()=>{
        removeColor(square)
    })

    container.appendChild(square);
}


function setColor(element){
    const color = `rgb(${random()},${random()},${random()})`;
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}