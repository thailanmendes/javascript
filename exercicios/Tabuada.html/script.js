function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um numero!')
    } else {
        var n = Number(num.value)
        tab.innerHTML = '' // faz a limpeza da pesquisa da tabuada anterior
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option') // criar elemento pelo javascript ao invés do html
            item.text = `${n} X ${c} = ${n * c}` // dentro do option
            item.value = `tab${c}`
            tab.appendChild(item) //appendChild, adicionar elemento filho
        }
    }
}