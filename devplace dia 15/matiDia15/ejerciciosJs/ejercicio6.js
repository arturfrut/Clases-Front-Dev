/*
6-  Usando el reduce retornar un solo array. pista: .concat

*/
/*


CON FOR

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let longData = []

for (let element of data ){
    longData = longData.concat(element)
}

console.log(longData)

*/

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const reducer = (past, next) => past.concat(next);
let longData = data.reduce(reducer)     
console.log(longData);