function multiplicapordois(arr){
    let multiplicados = []

    for (let i = 0; i < arr.length; i++){
        multiplicados.push(arr[i] * 2)
    }

    console.log(multiplicados)
}

const meusNumeros = [2,33,555,689,52]

multiplicapordois(meusNumeros)