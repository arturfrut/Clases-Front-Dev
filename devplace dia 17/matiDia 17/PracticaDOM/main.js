const paragraphs = document.querySelectorAll('p')
const container = document.querySelector('.container')
const anchor = document.querySelector('.anchor')
const h1 = document.createElement('h1')

////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////

anchor.addEventListener('click', e => {
    e.preventDefault()
    anchor.innerHTML = anchor.href})

/////////////////////////////////////////////////////////////////////

const img =document.createElement('img')

img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfNfmjd8ZthLLSFsVStn8GY4uIn_Mnisvuw&usqp=CAU'

container.appendChild(img)


//////////////////////////////////////////////


const btnToggle = document.createElement('button')
btnToggle.innerHTML = 'Toggle cantidad de palabras'
btnToggle.addEventListener('click',()=>{
    if (h1.style.display == 'none'){
        h1.style.display = 'block'
    }else{
        h1.style.display = 'none'
    }
}  )
container.appendChild(btnToggle)

////////////////////////////////////////////////////////////////////

const ul = document.createElement('ul')
container.appendChild(ul)
const input = document.createElement('input')
input.placeholder = 'Escriba y presione enter'

container.appendChild(input)
input.addEventListener('keypress',(e) => {
    if (e.code == 'Enter'){
        let newLi = document.createElement('li')
        newLi.innerText = input.value
        ul.appendChild(newLi)
    }
} )

/////////////////////////////////////////////////////////////////

const ano = new Date()
const year = ano.getFullYear()


const parent = container.parentNode
const anoH1 = document.createElement('h1')
anoH1.innerText = `Buenas buenas! estamos en el ${year}`
parent.appendChild(anoH1)

////////////////////////////////////////////////////////

const newContainer = document.createElement('div')
newContainer.style.height = '400px'
newContainer.style.backgroundColor = ''
newContainer.style.width = '400px'

container.appendChild(newContainer)

const btn1 = document.createElement('button')
btn1.innerText = 'Soy el boton 1'
newContainer.appendChild(btn1)
const btn2 = document.createElement('button')
btn2.innerText = 'Soy el boton 2'
newContainer.appendChild(btn2)

btn1.addEventListener('click', ()=> {
    console.log('apretaste el boton 1')
    newContainer.style.backgroundColor = 'red'
})
btn2.addEventListener('click', ()=> {
    console.log('apretaste el boton 2')
    newContainer.style.backgroundColor = ''
})

////////////////////////////
const nombre = 'Artu'


const form = document.createElement('form')
container.appendChild(form)
form.innerHTML = `
<p>
Ingrese su nombre:  <input type="text" placeholder="${nombre}">
</p>
<p>
Ingrese su apellido:  <input type="text">
</p>
<p>
<button type="submit">Enviar</button>
</p>
`