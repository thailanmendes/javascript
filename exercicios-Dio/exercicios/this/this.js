const pessoa = {
    nome: 'Thailan',
}

const animal = {
    nome: 'Bob' ,
}

function getSomething() {
    console.log(this.nome)
}

getSomething.call(pessoa)  // o caal chama a referencia pra chamar o this fora da function