const escola = 'bonifaci0'

console.log(escola.charAt(4)) // charAt = retorna letra no indice determinado
console.log(escola.charCodeAt(3)) // charCodeAt = retorna a letra no indice no formato UNICODE/ ASCI

console.log(escola.indexOf('a')) //Retorna a posição da primeira ocorrência de uma substring.
console.log(escola.substring(1))   // Retorna a substring no local especificado dentro de um objeto String.
console.log(escola.substring(0,3))

console.log("Escola ".concat(escola).concat("!"))
console.log("Escola " + escola + '!')

console.log(escola.replace(0, 'o')) //Retorna a posição da primeira ocorrência de uma substring.

console.log('thailan, Maria, Ruth'.split(',')) //Divida uma string em substrings usando o separador especificado e retorne-as como um array.