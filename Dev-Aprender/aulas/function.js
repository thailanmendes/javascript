//nomear uma function  
// Padrão = Verbo + substantivo


/*let corSite = 'azul';
function resetaCor (){ // criando function sem parâmetros, = valores dentro dos parenteses
    corSite = "";   //resetando a cor, vai aparecer vazio
};

console.log(corSite)
resetaCor();   //chamando a function
console.log(corSite) */


let corSite = 'azul';
function resetaCor (cor,tonalidade) {     // parâmetro cor 
    corSite = cor + ' ' + tonalidade; // concatenando os dois parâmetros com o + e o ' ' é o espaço, sem ele ficaria vermelhoclaro
}
console.log(corSite)
resetaCor("vermelho" , "claro")
console.log(corSite)



//Exercícios
let nomes = 'Trajano'
function AlterandoNomes (nome1 , nome2){
    nomes = nome1 + ' ' +nome2
}
console.log(nomes)
AlterandoNomes("Thailan" , "Ruth")
console.log(nomes)



let numbers = [8 , 9 , 6]
function numeros (number1 , number2, number3){
    numbers = number1 + number2 + number3
}

numeros(1,2,3)
console.log(numbers)



//Tipos de function

//Realiza uma tarefa, nao devolve nada:
function dizerNome(){
    console.log('Thailan');
}

dizerNome();   
//resultado  'Thailan'


//Faz um calculo ou operação e retorna algo
function MultiplicarPorDois(valor){
    return valor* 2;
}

let resultado = MultiplicarPorDois(50);

console.log(resultado);

