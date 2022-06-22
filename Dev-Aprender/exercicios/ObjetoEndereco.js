//Criar um objeto endereço que constem:
//Rua 
//Cidade
//Cep
//exibirEndereco(endereco)

let endereco = {
    Rua: 'Guimaraes Passos 149',
    Cidade: 'Santo Andre',
    Cep: 09250.290
}

function exibirEndereco(endereco){
    for(let chave in endereco)
        console.log(chave,endereco[chave])
}

exibirEndereco(endereco)

