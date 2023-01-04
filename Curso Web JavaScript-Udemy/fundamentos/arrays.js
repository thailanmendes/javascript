const valores =  [7.7, 8.9,  6.3,  9.2]
console.log (valores[0],valores[3])
console.log (valores[4])  //undefined

valores[4]  =  10
console.log( valores )
console.log(valores.length )

valores.push( { id: 3 } ,  false ,  null ,  'teste' ) // push - add elementos no array
console.log ( valores )

console.log(valores.pop()) // pop - elimina o ultimo elemento do array
delete valores [0] //eliminar elementos do array
console.log (valores)

console.log(typeof valores)  //typeof, ver o tipo