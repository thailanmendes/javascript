//Objeto Postagem de Blog
//Crie neste exercicio um objeto de postagem de blog q vai conter as seguintes propriedades
//postagem
/*
titulo
mensagem
autor
visualizações
comentários
    (autor, mensagem)
estarAoVivo
*/

/*
let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    vizualizacoes: 10,
    comentarios : [
        {autor: 'a', mensagem: 'b'},
        {autor: 'a', mensagem: 'b'}
    ],
    estarAoVivo: true 
}


console.log(postagem)*/



//Constructor Functions
function Postagem(titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.vizualizacoes = 0,
    this.comentarios =[],
    this.estarAoVivo = false
}

let postagem = new Postagem('a','b','c')
console.log(postagem)