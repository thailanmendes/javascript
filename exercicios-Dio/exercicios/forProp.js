function forInExemplo(obj){
    for(prop in obj) {
        console.log (prop);
    }
}

const meuObjeto = {
    name: "Thailan" , idade: "20" , cidade: "Sao Paulo"
}

forInExemplo(meuObjeto)