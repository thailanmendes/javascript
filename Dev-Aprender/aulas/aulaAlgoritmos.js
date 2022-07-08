function horaFuncionario() {
    let SalarioMes = 1200
    let horasMes = 160
    console.log(SalarioMes / horasMes)
}

horaFuncionario()



function ValorChutado (ChuteCliente){
    let ChutePrograma = 5
    if(ChuteCliente > ChutePrograma){
        console.log('Chute acima')
    } else if(ChuteCliente < ChutePrograma){
        console.log('Chute abaixo')
    }else if(ChuteCliente === ChutePrograma) {
        console.log('parabens voce acertou')
    }
}

ValorChutado(2)


valor = 10

for (i = 1; i <= valor+1 ; i++){
    console.log(i)
}


const convidados =['Jeff','Thailan','Ruth']

NomeUsuario = 'Thailan'

console.log('Seja bem vindo ' + NomeUsuario )


PrimeiroValor = 15
SegundoValor = 10

if (PrimeiroValor > SegundoValor){
    console.log('O primeiro valor é maior')
}else if(PrimeiroValor < SegundoValor){
    console.log('O segundo valor é maior')
}


function Fatorial(n){
    var resultado = n
    if(n <= 0){
        console.log('digite numero inteiro')
    }
    
    for(var i = 1; i < n ;i++){
        resultado *= i  //resultado = resultado * i 
    }
    return resultado
}
console.log(Fatorial(5))



idade = [15,46,75,34,23]

let soma =0
for(i=0;i<idade.length; i++){
    soma = soma + idade[i]   //soma+= idade[i]
}
console.log(soma)



