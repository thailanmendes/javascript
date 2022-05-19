function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = '<strong>Contando</strong>: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido! Considerando Passo 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} 👉` // U+1F449= código do emoji, mais no javascript é convertido assim : \u{1F449}, tbm da pra coloca o emoji diretamente 👉
            }  
        } else {
            //Contagem regressiva
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}