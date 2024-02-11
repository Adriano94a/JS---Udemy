var lista_frutas = Array()

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maça'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'
lista_frutas[5] = 'Pera'
lista_frutas[4] = 'Abacate'
console.log(lista_frutas)
console.log(lista_frutas.indexOf('Uva'))

var lista_num = Array()

lista_num [0] = 7
lista_num [1] = 3
lista_num [2] = 24
lista_num [3] = 17
lista_num [4] = 15
lista_num [5] = 6

console.log(lista_num.sort(ordena))

function ordena(a, b) {
    return a - b
    // < 0 = a ordenado antes de b
    // > 0 = b ordenado  antes de a
    // == a ordem é mantida
}