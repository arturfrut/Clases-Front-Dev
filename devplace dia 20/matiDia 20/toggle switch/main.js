const temas = [
    {
        primary:'#e6e7e7ef',
        secundary:'#ffffffc5',
        fontColor:'#000'
    },
    {
        primary:'#ef9a9a',
        secundary:'#ba6b6c',
        fontColor:'#000'
    },
    {
        primary:'#1a237e',
        secundary:'#000051',
        fontColor:'#fff'
    },
    {
        primary:'#29b6f6',
        secundary:'#0086c3',
        fontColor:'#fff'
    }
]


const buttons = document.querySelectorAll('.buttonColor');


console.log('conectado');

const changeColor = (index) =>{
    buttons[index].addEventListener('click',(e)=>{
        document.documentElement.style.setProperty('--primary',temas[index].primary);
        document.documentElement.style.setProperty('--secundary',temas[index].secundary);
        document.documentElement.style.setProperty('--fontColor',temas[index].fontColor);
    })
}

let i = 0;
const buttonsLen = buttons.length;

for (; i < buttonsLen; i++){
    changeColor(i);
}


