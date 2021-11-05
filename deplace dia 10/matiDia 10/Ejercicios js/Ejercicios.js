/*Consigna 1 */
console.log('CONSIGNA 1')

const yearsToDays = (years) => years * 365

console.log(yearsToDays(2))

/*Consigna 2 */
console.log('CONSIGNA 2')

const hoursToSeconds = (hours) => hours*3600

console.log(hoursToSeconds(2))

/*Consigna 3 */
console.log('CONSIGNA 3')

let myArray = ['Esto','es','un','futuro','string']
const myString = myArray.join(' ')

console.log(myString)

/*Consigna 4 */

/* const myArray = ['Esto','es','un','futuro'] */
console.log('CONSIGNA 4')

const revertedArray = (vector) => {
    vector2 = []
    for (let i = vector.length-1 ; i >= 0; i--) {
        vector.unshift(vector[vector.length-1])
        vector.pop()
    }
    return vector;
}

console.log(revertedArray(myArray));

/*Consigna 5*/
console.log('CONSIGNA 5')
const myArrayV2 = ['Esto','es','un','futuro']
/*
const revertedArrayV2 = (array) => array.reverse()



const myArrayV3 = myArrayV2.map(revertedArrayV2(myArrayV2))*/

//console.log(myArrayV3)

/*Consigna 6*/
console.log('CONSIGNA 6')

const concatArrays = (vector1,vector2) => vector3= vector1.concat(vector2)

console.log(concatArrays(myArrayV2,myArray))

/*Consigna 7 */

console.log('CONSIGNA 7')

const emptyArrayValidation = (vector) => vector.length =! 0

console.log(emptyArrayValidation(myArray))

/*Consigna 8 */

console.log('CONSIGNA 8')

const myStringB = 'Luke im your uncle'

const theLastB = (aString) => {
    let vectorString = aString.split('')
    if (vectorString[vectorString.length-1] == 'b'){
        return true
    } else {
        return false
    } 
}

console.log(theLastB(myStringB))

/*Consigna 9 */

console.log('CONSIGNA 9')

const lastAndFirstChars = (aString) =>{
    let vectorString = aString.split('');
    myNewVector = [vectorString[0],
                    vectorString[1],
                    vectorString[2],
                    vectorString[vectorString.length-1],
                    vectorString[vectorString.length-2],
                    vectorString[vectorString.length-3]
                ]
    return myNewVector.join()
}

console.log(lastAndFirstChars(myString))

/*Consigna 10 */

console.log('CONSIGNA 10')

const word1 = 'Sustantivo'
const word2 = 'Verbo'

const concatWithoutChars = (word1, word2) => word3 = word1.slice(2) + word2.slice(3)

console.log(concatWithoutChars(word1,word2))

/*Consigna 11 */

console.log('CONSIGNA 11')

const n1 = 102; 
const n2 = 99;

const nearTo100 = (n1,n2) => {
    let pos1 = n1 < 0 ? n1*-1 : n1;
    let pos2 = n2 < 0 ? n2*-1 : n2;

    let rest1 = 100-pos1;
    let rest2 = 100-pos2;

    return rest1 < rest2 ? n1 : n2
}

console.log(nearTo100(n1,n2))