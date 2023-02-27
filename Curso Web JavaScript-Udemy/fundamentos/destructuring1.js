// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa  // tirando atributo q nao existe dentro do objeto pessoa, retorna undefined
console.log(sobrenome, bemHumorada)  

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const {conta : {ag, num}} = pessoa  //acessando um atributo q nao existe dentro da pessoa, o atributo conta nao existe e muito menos ag e num 
console.log(ag, num)


