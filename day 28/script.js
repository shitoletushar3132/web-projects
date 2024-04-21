const button = document.getElementById('button');
const toasts = document.getElementById('toasts');


const message = [
    'Message one',
    'Message two',
    'Message Three',
    'Message Four'
]

const types = ['info', 'success', 'error']

button.addEventListener('click',()=>{
    createNotification();
})


function createNotification(msg = null, type = null){
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.classList.add(type ? type : getRandomType());

    notif.innerText = msg ? msg : getRandomMessage()

    toasts.appendChild(notif);

    setTimeout(()=>{
        notif.remove()
    },2000);
}

function getRandomMessage(){
    return message[Math.floor(Math.random()*message.length)]
}

function getRandomType(){
    return types[Math.floor(Math.random()*types.length)]
}