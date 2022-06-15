//Criar um método para ler propriedades de um objeto 
//exibir somente as propriedades do tipo string que estão nesse objeto

const filme1 = {
    nome : 'Homem Aranha',
    ano : 2017,
    diretor : 'Xibiu',
    personagem: 'Peter parque',
    idade: 46
}

const film2 = {
    titulo : 'Vingadores',
    ano : 2018,
    diretor : 'Robin',
    personagem: 'Thor',
    idade : 48
}

exibirPropriedades(filme1)
function exibirPropriedades(obj){
    for(prop in obj){
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
    }
}

