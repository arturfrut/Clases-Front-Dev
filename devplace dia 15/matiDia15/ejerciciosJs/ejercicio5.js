/*5- Crear una variable que muestre solo los nombres de los productos del siguiente array
hacerlo con .map
*/

const productos = [
    {id:2, nombre: 'Remera muy fachera', precio:250},
    {id:5, nombre: 'Pantalon muy fachero', precio:400},
    {id:6, nombre: 'Camperon invierno', precio:699},
    {id:34, nombre: 'Guantes negros', precio:199},
];


console.log(productos[1].nombre)

let productsName = productos.map(product => product.nombre)
console.log(productsName)