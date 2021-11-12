/*
6-  Usando el reduce retornar un solo array. pista: .concat

*/
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let longData = []

for (let element of data ){
    longData = longData.concat(element)
}

console.log(longData)