const open1 = document.getElementById("open");
const close1 = document.getElementById("close");

const container = document.querySelector(".container");
let val = false;
open1.addEventListener('click', () => {
    if(val){
        container.classList.add('show-nav');
        val = false;
    }else{
        container.classList.remove('show-nav');
        val=true;
    }
    
});


