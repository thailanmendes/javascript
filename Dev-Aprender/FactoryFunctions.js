//Factory Functions (Função de fabrica)
function criarCarro(marcaCarro, nomeCarro, motorPotencia, cc){
    return {
        marcaCarro,
        nomeCarro,
        motorPotencia,
        cc,

        ligar() {
            console.log("Vrummm...");
            
        }
    }
 }

 const Gol = criarCarro('volks', 'Gol', 55, 80)
 console.log(Gol)

//Pascal Case - UmDoisTresQuatro
 function Carro(marcaCarro,nomeCarro,motorPotencia){
    this.marcaCarro = marcaCarro,
    this.nomeCarro = nomeCarro,
    this.motorPotencia = motorPotencia,
    this.ligar = function(){
        console.log("Vrummm...");
    }
 }

 const carro = new Carro('Chevrolet', 'Celta', 10,22)
 console.log(carro)