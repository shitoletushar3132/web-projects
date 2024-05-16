const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d');
const clear = document.getElementById('clear')
const sizeDisplay = document.getElementById('size');
let size = parseInt(document.getElementById('size').innerText);
const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
let colorSelect = document.getElementById('color')
let isPressed = false;
let x
let y

let color = colorSelect.value;

// const color = `#FF0000`;
colorSelect.addEventListener('input',()=>{
    color = colorSelect.value
})
canvas.addEventListener('mousedown',(e)=>{
    isPressed=true;

    x=e.offsetX
    y=e.offsetY

    
})

canvas.addEventListener('mousemove',(e)=>{
    if(isPressed){
        const x2 =e.offsetX
        const y2 = e.offsetY
        drawCircle(x2,y2)
        drawLine(x,y,x2,y2)

        x = x2;
        y=y2

    }
})

canvas.addEventListener('mouseup',(e)=>{
    isPressed=false;

    x=undefined
    y=undefined
})

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2)
    ctx.fillStyle = color
    ctx.fill();
}




function drawLine(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size*2;
    ctx.stroke()
}

clear.addEventListener("click",()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})

increase.addEventListener('click',()=>{
    size = size+2;
    sizeDisplay.innerText = size;
})

decrease.addEventListener('click',()=>{
    size = size-2;

    sizeDisplay.innerText = size;
})




