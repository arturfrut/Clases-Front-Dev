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

}


for (let i = 0 ; i <=4 ; i++) {
    btnSlider02[i].addEventListener('click', changeInfoCrew(i))
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TECHNOLOGY PAGE
////////////////////////////////////////////////////////////////////////////////////////////////////////////




//OBJETOS POR CADA TECNOLOGIA

const technology = [
    {
        title: 'Launch vehicle',
        paragraph: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earths surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, its quite an awe-inspiring sight on the launch pad!',
        img: './image-launch-vehicle-landscape'
    },
    {
        title: 'Space capsule',
        paragraph: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earths atmosphere without wings. Our capsule is where youll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
        img: './image-space-capsule-landscape'
    },
    {
    title: 'Spaceport',
    paragraph: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    img: './image-spaceport-landscape'
    }
]


//SELECCION DE ELEMENTOS DE PAGINA 3

const title03 = document.querySelector('#title03'); //SPACE LAUNCH 101 FIJO   //THE TERMINOLOGY FIJO 
const paragraph03 = document.querySelector('#paragraph03');
const img03 = document.querySelector('#img03');

const btnSlider03 = document.querySelectorAll('.btnSlider03')

//FUNCION PARA CAMBIAR ELEMENTOS CON UN CLICK



const changeInfoTechnology = (technologyNumber) =>{
    title02.innerText = technology[technologyNumber].title
    subtitle02.innerText =  technology[technologyNumber].subtitle
    paragraph02.innerText = technology[technologyNumber].paragraph
    img02.src = `DIRECCION DE IMAGEN${technology[technologyNumber].img}`
    navTitle02.innerText = 'Meet your crew'
    span02.innerText = '02'
}

for (let j = 0 ; j <=4 ; j++) {
    btnSlider03[j].addEventListener('click', (e)=>{changeInfoTechnology(j)})
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DESTINATION PAGE
////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OBJETOS POR CADA PLANETA

const planets = [
    {
        title: 'EUROPA',
        paragraph: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 mil. km',
        time:'3 years',
        img: './image-europa'
    },
    {
        title: 'MARS',
        paragraph: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 mil. km',
        time:'9 months',
        img: '/mage-mars'
    },
    {
        title: 'MOON',
        paragraph: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 km',
        time:'3 days',
        img: '/mage-moon'
    },
    {
        title: 'TITAN',
        paragraph: 'Titan The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 bil. km',
        time:'7 years',
        img: './image-titan'
    },

]



//SELECCION DE ELEMENTOS DE PAGINA 3

const title01 = document.querySelector('#title01'); //SPACE LAUNCH 101 FIJO   //THE TERMINOLOGY FIJO 
const paragraph01 = document.querySelector('#paragraph01');
const img01 = document.querySelector('#img01');
const distance01 = document.querySelector('#time01');
const time01 = document.querySelector('#time01');

const btnSlider01 = document.querySelectorAll('.btnSlider01')

//FUNCION PARA CAMBIAR ELEMENTOS CON UN CLICK

const changeInfoPlanet = (planetNumber) =>{
    title01.innerText = planets[planetNumber].title
    paragraph02.innerText = planets[planetNumber].paragraph
    img01.src = `DIRECCION DE IMAGEN${planets[planetNumber].img}`
    distance01.innerText = planets[planetNumber].title
    time01.innerText = planets[planetNumber].title

}

for (let k = 0 ; k <=4 ; k++) {
    btnSlider01[k].addEventListener('click', (e)=>{changeInfoTechnology(k)})
}