// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {   // => arrow function diminui as linhas de codigo
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b   // arrow function com 2 parâmetros 
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a) // arrow functions apenas com 1 parâmetro nao necessita de parenteses 
imprimir2('Legal!!!')