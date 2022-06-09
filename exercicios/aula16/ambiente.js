let num = [5, 8, 2, 9, 3]
num.shift() // tira o primeiro elemento
num.sort() // coloca os elementos em ordem crescente
num.push(11) // adicionei o elemento 1 na ultima posição
console.log(num) 
console.log(`o vetor tem  ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8) // comando para verificar em qual posição esta o elemento desejado, quando coloca um valor q nao esta nas variáveis compostas o javaScript coloca como -1

if ( pos == -1) {
    console.log('O valor nao foi encontrado')
} else {
    console.log(`o valor esta na posição ${pos}`)
} 

/*

let num = [5, 8, 2] 
num [3] = 6, para adicionar uma elemento no espaço 3
num.push(7), para adicionar o elemento 7 no ultimo espaço 
num.length, para ver o tamanho do comprimento dos espaços
num.sort(), colocar os elementos em ordem crescente

*/