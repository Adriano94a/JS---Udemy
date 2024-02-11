function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
    var res = document.querySelector(`div#res`)
    if (fano.valueMax.length == 0 || fano.value > ano) {
        window.alert(`[Erro]`)
    }
}