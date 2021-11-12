/*Crear una variable que filtre los animales que no sean 'cat' usar filter*/


const pets = ['cat', 'dog', 'elephant','hawk','snake','cat']

let noCats = pets.filter(pet => pet  != 'cat');

console.log(noCats)