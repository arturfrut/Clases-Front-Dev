/*
1-
str = "origin"
cambiar las vocales por el numero 1
output => 1r1g1n
*/

const byeVocals1 = (myWord) => myWord.replace(/[aeiouAEIOU]/g, '1')

//console.log(byeVocals1('origin'))

/*
2-
 Crear una función que acepte un parámetro con los valores desde 1 hasta 5
 si valor numérico ingresado es 1 mostrar una lista del 1 al 10, si es 2 mostrar del 2 al 10,
 teniendo en cuenta el limite es 10
  posibles salidas esperadas:
  output => 1...10
  output => 2...10
  output => 3...10
  output => 4...10
  output => 5...10
  */
const forUntilTen = (begin) =>{
let index = begin;
let outPut = '';
    if (begin <= 5){
        for (; index <= 10; index++) {
            outPut += index.toString()
    } 
    return outPut
} else {
    return 'Su numero es mayor a 5'
}
}

//console.log(forUntilTen(5))

/*
3-
  
  verificar cada elemento sea de  tipo number y sino lo es cambiar su  tipo
  a number
  output => [10, 20, 30, 40, 50]
  */


const arr = [10, "20", 30, "40", 50];

const arrayIsNumber = (myArray) =>{
    let newArray = []

    arr.forEach(element => {
        if (isNaN(element)){
            newArray.push(element)
        } else {
            newArray.push(Number(element)) 
        }
    });

    return newArray
}

//console.log(arrayIsNumber(arr))

/*
 arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"]
 eliminar los elementos repetidos, nota: (el segundo elemento repetido)
 output => [2, 4, 7, 1, "foo", "bar", "qux", 3]
*/

const repeatArray = (myArray) =>{
    let arrayNoRepeat = myArray.filter((element,i)=>{
        return myArray.indexOf(element) === i;
      })
}

//console.log(repeatArray(arr))


