let info = ['Adriano Souza', 'Adriano', 'Souza', '@driano10a']

let [nomeCompleto, nome, sobrenome, instagram] = info;

console.log(instagram)


//array atraves de uma função

function criar() {
    let a = [1,2,3];
    return a;

}

let numeros = criar();

let [a,b,c] = numeros;

console.log(a,b,c);