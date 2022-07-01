function verificar() {	
    NomeConvidado = document.querySelector('input#nome').value
    ConvidadosThailan = ['Ruth', 'Zuilma', 'Trajano', 'Thauan', 'Evelyn']

    if(ConvidadosThailan.includes(NomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText = 'Voce pode entrar'
    }else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Voce nao pode entrar'
    }
}
