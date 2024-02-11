let lista = ['Ovo' , 'Farinha', 'Corante' ,'Massa'];
let lista2 = ['Maça', 'Banana', 'Limão', 'Laranja']

//let res = lista.toString();
//let res = lista.join('-'); //coloca - no lugar do espaço.
lista.push('Prato')
//let res = lista.indexOf('Corante') // mostra a posição da palavra
// .pop remove o ultimo item da lista
// .shift remove o primeiro item da lista
//.splice (remove os (1) indicados)
// .sort() ordena em ordem alfabetica
// .reverse ordena Z a A

let res = lista.concat(lista2);
console.log(res);
console.log(lista.sort());

//console.log(res.splice())