function adicionar (nomes, ...novosNomes) {
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];

    return novoConjunto;
}

let nomes = ["Adriano", "Souza"];

let outros = adicionar(nomes, "Lucia", "Tais","Miguel");

console.log(outros);