const paragraphs = document.querySelectorAll('p')
const container = document.querySelector('.container')
const anchor = document.querySelector('.anchor')
const h1 = document.createElement('h1')


let countWords = 0;

paragraphs.forEach(p => {
    p.style.backgroundColor = 'red'
});

paragraphs.forEach(p=>{
    pArray = (p.outerText.split(' ')).length;
    countWords += pArray   
})


h1.innerText = `Hay un total de ${countWords} palabras`
container.appendChild(h1)


anchor.addEventListener('click', e => {
    e.preventDefault()
    anchor.innerHTML = anchor.href})

const img =document.createElement('img')

img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfNfmjd8ZthLLSFsVStn8GY4uIn_Mnisvuw&usqp=CAU'

container.appendChild(img)
