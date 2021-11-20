const btnRange = document.querySelector('.btnRange');
const inputRange = document.querySelector('.inputRange');
const btnColor = document.querySelector('.btnColor');
const inputColor = document.querySelector('.inputColor')
const btn42 = document.querySelector('.c42');



const title = document.querySelector('.title');
const btnText = document.querySelector('.btnText');
const inputText = document.querySelector('.inputText')

const changeText = () => title.innerText = inputText.value;
btnColor.addEventListener('click',changeText);








const changeSize = () => title.style.fontSize= `${inputRange.value}px` ;
const changeColor = () => title.style.color = inputColor.value; 
const change42 = () => title.innerText = 'c42';

btnRange.addEventListener('click',changeSize);
btnColor.addEventListener('click',changeColor);
btn42.addEventListener('mousedown',change42);