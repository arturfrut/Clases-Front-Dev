////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CREW PAGE
////////////////////////////////////////////////////////////////////////////////////////////////////////////


//OBJETOS POR CADA MIEMBRO DE LA TRIPULACION

const crew = [
    {
        subtitle: 'Douglas Hurley',
        title: 'Commander',
        paragraph: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        img: './image-douglas-hurley',
        nav: '1'
    },
    {
        subtitle: 'Anousheh Ansari',
        title: 'Flight Engineer',
        paragraph: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
        img: './image-anousheh-ansari'
    },
    {
        subtitle: 'Victor Glover',
        title: 'Pilot',
        paragraph: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
        img: './image-victor-glover'
    },
    {
        subtitle: 'Mark Shuttleworth',
        title: 'Mission Specialist',
        paragraph: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        img: './image-mark-shuttleworth'
    }
]

//SELECCION DE ELEMENTOS DE PAGINA 2

const title02 = document.querySelector('#title02');  //Meet your Crew 02 FIJOS
const subtitle02 = document.querySelector('#subtitle02');
const paragraph02 = document.querySelector('#paragraph02');
const img02 = document.querySelector('#img02');


const btnSlider02 = document.querySelectorAll('.btnSlider02')

//FUNCION PARA CAMBIAR ELEMENTOS CON UN CLICK



const changeInfoCrew = (crewNumber) =>{
    title02.innerText = crew[crewNumber].title
    subtitle02.innerText =  crew[crewNumber].subtitle
    paragraph02.innerText = crew[crewNumber].paragraph
    img02.src = `DIRECCION DE IMAGEN${crew[crewNumber].img}`
    console.log('aprete el boton')
}

console.log(btnSlider02)

// btnSlider02[0].addEventListener('click', (e)=>{changeInfoCrew(0)})
// btnSlider02[1].addEventListener('click', (e)=>{changeInfoCrew(1)})
// btnSlider02[2].addEventListener('click', (e)=>{changeInfoCrew(2)})
// btnSlider02[3].addEventListener('click', (e)=>{changeInfoCrew(3)})

for (let i = 0 ; i <=4 ; i++) {
    btnSlider02[i].addEventListener('click', (e)=>{changeInfoCrew(i)})
}
