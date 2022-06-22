//For in
//Mais usado em objetos e arrays
//inteirar propriedades de objeto ou elementos de um array

const pessoa = {
    name : 'Thailan',
    idade: 29
};

for(let chave in pessoa){  //chave = key-value    name= key(chave), Thailan = value(valor)
    console.log(chave,pessoa[chave]);
}


const cores = ['red', 'blue', 'black'];

for (let indice in cores){ //in = buscar informação 
    console.log(indice,cores[indice])
}


//For off
//jeito mais simples de inteirar

for(let cor of cores){
    console.log(cor)
}