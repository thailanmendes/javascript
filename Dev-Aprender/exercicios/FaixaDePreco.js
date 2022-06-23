//Faixa de preço

//Crie um array de objetos de faixa de preço para que ela possa ser usado em um site igual o mercado livre

//Primeira Opcao
let faixas = [
    {tooltip: 'até R$700', minimo:0,maximo:700},   //tooltip = 
    {tooltip: 'de R$700 a R$1000', minimo:700,maximo:1000},
    {tooltip: 'de R$1000 ou mais', minimo:1000,maximo:999999},
    ]
console.log(faixas)

//segunda opcao (Factory Functions)
function criarFaixaPreco (tooltip,minimo,maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criarFaixaPreco('a', 1, 100),
    criarFaixaPreco('b', 100, 1000),
    criarFaixaPreco('c', 1000, 10000)
]
console.log(faixas2)


//Terceira Opcao (Constructor Functions)
function FaicaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new FaicaPreco('a',1,100),
    new FaicaPreco('b',10,1000),
    new FaicaPreco('c',100,10000),
]
console.log(faixas3)
