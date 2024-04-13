const dark2 = document.querySelector('button');

dark2.addEventListener('click',(dark)=>{
    const html =document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        dark2.innerHTML=`<i class="fa-solid fa-moon"></i>`
    }else{
       html.classList.add('dark')
       dark2.innerHTML=`<i class="fa-solid fa-sun"></i>`
    }
})