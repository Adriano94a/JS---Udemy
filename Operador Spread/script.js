let numeros = [1,2,3,4];

let outros = [...numeros, 5,6,7,8];

console.log(outros)



let info = {
    nome:'Adriano',
    sobrenome:'Souza',
    idade:29
};


let novaInfo = {
    ...info,
    cidade:'Belo Horizonte',
    estado:'Minas Gerais',
    Pais:'Brasil'
};

console.log(novaInfo)