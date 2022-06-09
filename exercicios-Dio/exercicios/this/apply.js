const myobj = {
    num1: 2,
    num2: 6,
}

function soma (a,b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myobj, [5, 8]) // diferença do call manda as diferencas somente por virgula, e no apply separa os argumentos por um array 
