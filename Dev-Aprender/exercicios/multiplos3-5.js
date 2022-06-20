//Criar função somar que retorna a soma de todos os múltiplos de 3 e 5 

//Múltiplos de 3 //3,6,9
//Múltiplos de 5 //5,10

//Somando os múltiplos
//armazenar os múltiplos de 3 
//armazenar os múltiplos de 5
//somar os dois



somar(10);
function somar(limite){
    let multiplosde3 = 0
    let multiplosde5 = 0
    for(i=0; i <= limite; i++){
        if(i % 3 === 0)
        multiplosde3 += i; //  ===  multiplosde3 = multiplosde3 + i 
        if(i % 5 === 0)
        multiplosde5 += i;
    }
    console.log(multiplosde3 + multiplosde5)
}

