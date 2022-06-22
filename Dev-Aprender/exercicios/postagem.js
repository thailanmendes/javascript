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

console.log(postagem)