//if...else
/*Se a hora estiver entre 06:00 até 12:00  : Bom dia!
  Se estiver entre 12:00 até 18:00 : Boa tarde!
  Caso contrario : Boa noite!
*/


let hora = 10

if(hora > 6 && hora < 12 ){
    console.log('Bom dia!')
}else if(hora > 12 && hora < 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}



//switch case

let permissao; // comum, gerente, diretor
permissao = 'gerente';

switch (permissao){
    case 'comum':
    console.log('usuario comum');
    break;

    case 'gerente':
    console.log('usuario gerente');
    break;

    case 'diretor':
    console.log('usuario diretor');
    break;

    default:
    console.log ('usuario nao reconhecido!');
}