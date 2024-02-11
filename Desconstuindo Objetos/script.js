let pessoa = {
    nome:'Adriano',
    sobrenome:'Souza',
    idade: 29,
    social:{
        facebook:'asantos',
        instagram:'driano10'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
};

console.log(pessoa.nomeCompleto());


let idade = pessoa.idade;   //criando uma variavel com as informações do objeto
let host = pessoa.nome;   //criando uma variavel com as informações do objeto




let {nome, sobrenome , idade} = pessoa; // desconstruindo o objeto
//opção para eu descontrui o objeto com outro nome
// let {nome:pessoaNome, sobrenome , idade }  = pessoa  (no caso a nova variavel pessoaNome receberia o valor de Nome.)