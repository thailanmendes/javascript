//Escreva uma função q usa 2 números e retorna o maior entre eles

let valorMaior = max(500,595)
console.log(valorMaior)

function max(number1,number2){
    if(number1 > number2){
        return number1;
    }else {
        return number2;
    }
}


/* simplificando o código

function max(number1,number2){
    return number1 > number2 ? number1 : number2 
}

 */
