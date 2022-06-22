const mouse ={
    cor : 'red',
    marca : 'redragon'
}
mouse.velocidade = 5000 //adicionar propriedades dentro do objetos
mouse.trocarDPI = function(){
    console.log('mudando DPI')
}
delete mouse.velocidade //deletar propriedades dentro do objeto
console.log(mouse)

//clonando objeto
/*
const novoObjeto = Object.assign({
    bateria:1000
},mouse)
console.log(novoObjeto)*/


//clonando objeto
const objeto2 = {...mouse}
console.log(objeto2)


