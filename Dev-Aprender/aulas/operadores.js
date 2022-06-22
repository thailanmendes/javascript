//Operadores aritméticos(matemáticos)
//Operadores de atribuição
//Operadores de comparação
//Operadores Lógicos 
//Operadores Bitwise


//Aritméticos  +, - , * , / , e o ** =  exponencial, um numero vezes ele mesmo
let salario = 5;

console.log(salario + salario)
console.log(salario ** salario)
console.log(salario * salario)

// ++ --  Incremento ou decremento 
let idade = 28;

console.log(idade++);

console.log(idade); // resultado vai ser 29


//Operadores de Atribuição
let valorTeclado = 100;
valorTeclado += valorTeclado; //valorTeclado = valorTeclado + valorTeclado
console.log(valorTeclado);

//Operadores de igualdade 
//Igualdade estrita  // compara o tipo se é igual em todo os aspectos  
console.log(1 === 1); // true   
console.log('1' === 1) // false, por q o primeiro 1 é string

//igualdade solta
console.log('1' == 1) // compara o apenas o valor se é igual e nao o tipo 


//Operador Ternário
let pontos = 200
let tipo = pontos > 100 ? 'premium' : 'comum'
console.log(tipo)


//Operadores Lógicos 
//e (&&), retorna True se os dois operadores forem true 
/*let maiorDeIdade = true
let possuiCarteira = true
let podeAplicar = (maiorDeIdade && possuiCarteira)
console.log(podeAplicar)*/

//ou (||), retorna true se pelo menos um dos operandos forem true
let maiorDeIdad = true
let possuiCarteir = false
let podeAplica = (maiorDeIdad || possuiCarteir)
console.log('pode aplicar:', podeAplica)

//Not, negação (!)
let candidatoRecusado = !podeAplica
console.log('CandidatoRecusado:' ,candidatoRecusado)


//Comparação nao boleanas
/* Falsy
undefined
null
0
false
''
NaN - not a number
*/

//Truthy
let corPersonalizada = '' //como string vazia e falsy vai retornar o azul q é true(tem valor)
let corPadrao = 'Azul'
corPerfil = corPersonalizada || corPadrao //operador ||(ou) vai sempre retornar a primeira comparacao verdadeira
console.log(corPerfil) 
//vermelho 



