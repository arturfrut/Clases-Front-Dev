/*
Ej-1  cadena = "javascript"; dada la anterior cadena colocar la primera letra en mayúscula
      output => Javascript
*/

const capitalLetter = (myWord) => myWord.charAt(0).toUpperCase() + myWord.slice(1);

//console.log(capitalLetter('javascript'))

/*
Ej-2 cadena = "javascript";  dada la anterior cadena colocar la ultima letra en mayúscula
    output => javascripT
*/

const lastCapitalLetter = (myWord) => {
    const lastChar = myWord.charAt(myWord.length-1)
    const lastCharCap = lastChar.toUpperCase()
    const otherChars = myWord.slice(0, myWord.length-1 )
    return otherChars.concat(lastCharCap)
}

//lastCapitalLetter('javascript')

/*
Ej-3 arr = ["foo", "bar", "baz", "qux", "origin"]
     buscar en ele array el elemento baz y mostrarlo console
     output =>  baz
*/

arr = ["foo", "bar", "baz", "qux", "origin"];

const searchBaz =(myArray) => myArray[myArray.findIndex(ele => ele === "baz")]

//console.log(searchBaz(arr))

/*
Ej-4 arr = ["foo", "bar", "baz", "qux", "origin"]
     vaciar el arr
     output => [ ]
*/

const emptyArray = (myArray) => myArray = []

//console.log(emptyArray(arr))

/*
Ej-5  1 str = "origin"
  eliminar las vocales del string
  output => rgn
*/



const byeVocals = (myWord) => myWord.replace(/[aeiouAEIOU]/g, '')

//console.log(byeVocals('origin'))