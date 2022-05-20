let valores = [8, 7, 1, 9, 3, 2]

//console.log(valores)


/*for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
for(let pos in valores) {   
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} // para cada posição na variável composta 
//for se ler (para) e o in (dentro ou em )