//Divisível por 3 => Fizz
//Divisível POR 5 => Buzz
//Divisível por 3 e 5 => FizzBuzz
//Nao divisível por 3 ou 5 => entrada
//Nao é um numero => 'Nao é um numero'

const resultado = fizzBuzz(11)
console.log(resultado)

function fizzBuzz(entrada){
    if(typeof entrada !== 'number')
        return 'Nao é um numero'
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz'
    if(entrada % 3 === 0)
        return 'Fizz'
    if(entrada % 5 === 0)
        return 'Buzz'

    return entrada; // se o numero nao for divisível por 3 e nem por 5 retorna o próprio numero informado
}

