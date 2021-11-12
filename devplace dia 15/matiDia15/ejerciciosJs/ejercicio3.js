/*
3-
Crear una variable que contenga el siguiente array :
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Definir una variable filtered que muestre los valores de los los numeros que son pares utilizando el método .filter()
*/

let arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let even = arr.filter(num => num % 2 == 0);

console.log(even)