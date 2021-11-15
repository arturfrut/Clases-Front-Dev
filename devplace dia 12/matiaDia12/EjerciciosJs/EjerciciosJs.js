/* Ejercicio Nº1
Escribe una función que sume que calcule la suma de dígitos de un número entero es decir la suma de todos sus dígitos.
Ejemplo: suma de dígitos (192) debería devolver 12 (1+9+2)
*/

const sumaDigitos = (digitos) =>{
     let myArray = ('0'+digitos).split('');
     let suma = null;
     
     for (digitos of myArray) {
          suma += (1*digitos);
     } 

     return suma;
}

//console.log(sumaDigitos(123))

/* Ejercicio Nº2
Escriba una función que tome un string con una suma y devuelva su resultado como un número.
Deben sumarse dos números naturales(numeros enteros). La tarea de suma es una cadena de la forma '102 + 17'.
*/

     
const sumaString = (cuenta) =>{
     let sumaElementos = null;
     let myArrayDeSuma = cuenta.split('+')

     sumaElementos = 1*myArrayDeSuma[0] + 1*myArrayDeSuma[1];

     return sumaElementos;
}

//console.log(sumaString('2+23'))

/* Ejercicio Nº3
Escribir una función que genere un numero random y pregunte por prompt "Adivina un numero del 1 al 10"
hasta que acierte y muestre "Adivinaste el numero"*/

const adivinaPrompt = () =>{
     let randomNumber = parseInt(Math.random()*(11 - 0));
     do {
          myNumber = prompt('Introduce un numero del 1 al 10','Escriba aqui');
     } while (randomNumber != myNumber);
     return alert(`Adivinaste! ${randomNumber} era el numero!`)
}

//adivinaPrompt()
