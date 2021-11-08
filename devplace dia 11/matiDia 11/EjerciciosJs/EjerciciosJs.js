// EJERCICIO 1 MEMORIA

const remember = (str) => {
    switch (str) {
        case 'Ricardo':
            '"Ricardo es tu tio"'
            break;
        case 'Roberto':
            '"Roberto es tu hermano"'
            break;
        case 'Argentina':
            'El país al que perteneces"'
            break;
        case 'Dinamita':
            '"Es tu gato"'
            break;
        default:
            '"Que hago aca?, y Candela?"'
            break;
    }
}

// EJERCICIO 2 100


const hundred = (num1,num2) =>{
    return num1 === 100 || num1 === 100 || num1 + num2 === 100 ? true:false 
} 

// EJERCICIO 3 Js

const exten = (str) =>{

    array = str.split('')
    i = array.indexOf('.')
    if (i){
        slic = array.slice(i)
        ext = slic.join('')
        return(`La extension es de tipo ${ext}`)
    } else {
        return('El archivo no tiene extension')
    }
}

// EJERCICIO 4 CONVERSOR CF

const conversor = (unit, num) =>{
    if (unit.toUpperCase() = 'C' ){
        return (num -32) / 1.8
    } else if (unit.toUpperCase() = 'F' ){
        return (num * 1.8) + 32
    } else {
        return 'Unidad no valida'
    }
}

// EJERCICIO 5 FECHA

const weekDays = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']

const myTime = () => {
    let today = new Date();
    let dd = weekDays[today.getDay()-1];
    let hr = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    return (`Hoy es : ${dd} \ Hora actual : ${hr}`)
}
