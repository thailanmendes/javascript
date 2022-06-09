const myobj = {
    num1: 2,
    num2: 6,
}

function soma (a,b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myobj, 5, 8)