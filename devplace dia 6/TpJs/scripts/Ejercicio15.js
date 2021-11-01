let promptN3 = prompt('Ingrese su tercer numero');

let orden = [promptN1, promptN2, promptN3]

console.log(orden.sort(function(a, b){return b - a}))