var objetos = Array('Cadeira','Impressora','Garfo')

function add() {
    //recupera o valor inserido no campo id Objetos
    var entrada = document.getElementById('entradas').value
    console.log(entrada)

    //caso possua algum valor preenchido entra no if
    if(entrada !='') {

        //verifica se o valor já não foi inserido anteriormente
        //se sim, informa que valor já exitste, se não insere novo valor
        if (objetos.indexOf(entrada) !== -1) {
            alert('Objeto já adicionado anteriormente!')
        } else {
            objetos.push(entrada)
            console.log(objetos)

            document.getElementById('entradas').value=''
        }
    } else{
        alert('Informe um objeto válido')
    }

}

function orde() {
    objetos = objetos.map(item => item.toUpperCase());
    objetos.sort()
    console.log(objetos)
}