/*Ejercicio N1******************************* */

let num = 20;
let str = 'Variable String';
let emptyArray = [];
let tripleArray = [10,true,"foo",];
let obj = {}

let objCons = {
    num, str, emptyArray, tripleArray, obj 
}

/*Ejercicio N2******************************* */

console.log(objCons)

/*Ejercicio N3 *******************************/

let sum1 = 20;
let sum2 = 24;
let sumTotal = sum1+sum2;
console.log(sumTotal)

/*Ejercicio N4 *******************************/
/*
let mostrarNombre = () => 
console.log('Smith')
*/
/*Ejercicio N5 *******************************/

let mostrarNombre = (nombre) => 
console.log(nombre)

/*Ejercicio N6 *******************************/
/*
let datos = 'foo'
console.log(datos.toUpperCase(datos))
*/
/*Ejercicio N7 *******************************/

let datos = 'FOO'
console.log(datos.toLowerCase(datos))

/*Ejercicio N8 *******************************/
/*
let info = 'lorem ipsum scammer'

console.log(info.split(' '))
*/
/*Ejercicio N9 *******************************/

let info = ['lorem', 'ipsum', 'scammer']

console.log(info.join(' '))

/*Ejercicio N10****************************** */

console.log([0])

/*Ejercicio N11****************************** */

console.log(info.push('simply'))

/*Ejercicio N12****************************** */

info.shift()
console.log(info)

/*Ejercicio N13****************************** */

let info2 = ["lorem", "ipsum", "scammer", "simply", "sit", "amet", "laboris", "nisi"]

console.log(info2.length)

/*Ejercicio N14****************************** */

const infoMayuscula = ["lorem", "ipsum", "scammer", "simply", "laboris", "sit", "amet", "laboris"];

infoMayuscula.forEach((element,j) => {
    
    if(element=="laboris"){
        infoMayuscula[j]= infoMayuscula[j].toUpperCase()
    }
});

console.log(infoMayuscula)

/*Ejercicio N15****************************** */

let foo = 'qux'

if ( foo%2 == 0 ) {
    console.log("Es par")
} else {
    console.log('Es impar')
}

/*Ejercicio N16****************************** */

let A = 100;
let B = 200;

A>B ? console.log(true) : console.log(false)

/*Ejercicio N17****************************** */

let edad = 20

switch (edad < 21) {
    case true:
      console.log('La persona es menor')
      break;
    case false:
        console.log('La persona es mayor')
      break;
  }

/*Ejercicio N18****************************** */


let infoRepetidos = ["lorem", "ipsum", "lorem", "scammer", "simply", "laboris", "sit", "amet", "laboris"];

let newInfoRepetidos = infoRepetidos.filter((item,i)=>{
  return infoRepetidos.indexOf(item) === i;
})
console.log(newInfoRepetidos);

/*Ejercicio N19****************************** */

let infoLenghts = ["lorem", "ipsum", "scammer", "simply", "laboris", "sit", "amet"];

for (let element of infoLenghts){
    console.log(element.length)
} 

/*Ejercicio N20****************************** */

const report = 'lorem ipsum scammer simply laboris sit amet'

let reporte = report.split('')

reporte.forEach((element,j) => {
    if(element=="a"){
        reporte[j]= 'x'
    }
});

let k = reporte.indexOf('a')
if(k !== -1) {
    reporte.splice(i,1)
}

reporte[reporte.length] = '@'
console.log(reporte)
reporte[0] = reporte[0].toUpperCase();
console.log(reporte.toString())

let count = 0;
for (let vocal of reporte) {
    if (/[aeiou]/.test(vocal) ){
        count+=1;
    }
}

console.log(`La cantidad de vocales es ${count}`)
