//Arrays = conjunto de valores


let familia = [25, 'Thailan' , 88]; // todos array tem o índice q é começado do 0

console.log(familia[2]); //aqui foi mostrado o índice 2 q no caso é o numero 88 do let familia, o indice 0 seria o valor 25, o 1 = 'Thailan' e o 2 o valor 88

console.log(familia.length); // length, para ver o tamanho do nosso array q no caso é 3




/*let nomeDoIrmao = ['thauan', 28, true, 'idade27']
console.log(nomeDoIrmao)
console.log(nomeDoIrmao.length)*/



//Adicionando elementos 
const numeros = [1,2,3];

//inicio
numeros.unshift(0)
console.log(numeros)

//meio
numeros.splice(1,0,'a')
console.log(numeros)

//final
numeros.push(5)
console.log(numeros)

//Encontrando elementos(Tipos Primitivos)
console.log(numeros.indexOf(1)) // indice 1 é o numero 2  //indexOf é para encontrar qual índice o elemento se encontra

//forma de descobrir valores q existe dentro do array com indexOf
console.log(numeros.indexOf(4) !== -1) //se é colocado um valor inexistente aparecera -1
//jeito mais simples com o includes
console.log(numeros.includes(2))


//Removendo elementos 
//final
const ultimo = numeros.pop()  //elimina o ultimo valor do array 
console.log(ultimo)
console.log(numeros)
// inicio
const primeiro =numeros.shift() //elimina o primeiro elemento
console.log(primeiro) //numero 0 eliminado 
console.log(numeros)
//meio
const meio =numeros.splice(2,1)  // 2 significa o índice do array e o 1 a quantidade de itens a ser removido
console.log(meio) //numero 2 eliminado
console.log(numeros)

//esvaziando um array 
console.log(numeros.length = 0)




//Encontrando elementos(Tipos de Referencia)
//o includes nao serve pra procurar o objeto

const marcas = [
    {id:1,nome: 'a'},
    {id:2,nome: 'b'}
]

const marca = marcas.find(function(marca){
    return marca.nome === 'c' //caso nao tiver um elemento valido dentro do objeto retorna undefined
})
console.log(marca)

//Arrow function 
/*const marca = marcas.find(marca => {
    return marca.nome === 'c'
})
console.log(marca)*/



