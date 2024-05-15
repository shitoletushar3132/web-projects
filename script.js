document.addEventListener('DOMContentLoaded', () => {
    const darkToggle = document.querySelector('.dark-toggle');
    const body = document.body;

    
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    darkToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            darkToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
            localStorage.setItem('darkMode', 'disabled');
        } else {
            body.classList.add('dark-mode');
            darkToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
            localStorage.setItem('darkMode', 'enabled');
        }
    });
});
