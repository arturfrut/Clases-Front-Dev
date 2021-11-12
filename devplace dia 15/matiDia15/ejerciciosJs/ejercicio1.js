/*
1-
 arr = [1,3,4,2,6,7,9,1, 8]
Crear una función que indique el total de elementos impares de un array
 output => 5
===========================================================
*/

let even = 0;
const  arr = [1,3,4,2,6,7,9,1, 8];

for (let elem of arr) {
    even = elem%2 == 0 ? even+1 : even;
}

console.log(even)