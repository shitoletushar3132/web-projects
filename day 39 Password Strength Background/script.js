const password = document.getElementById('password');
const background = document.getElementById("background");

password.addEventListener('input',()=>{
    let length = password.value.length;
    let value = 20-length*2;
    changeBlur(value);
})

function changeBlur(value){
    background.style.filter=`blur(${value}px)`;
}