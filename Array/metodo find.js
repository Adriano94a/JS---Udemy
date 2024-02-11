let lista = [
    {id:1, nome:'Adriano', sobrenome:'Souza'},
    {id:2, nome:'Lucia', sobrenome:'Sousa'},
    {id:3, nome:'Miguel', sobrenome:'Jose'},
    {id:4, nome:'Tais', sobrenome:'Sousa'}
];

let pessoa = lista.find(function(item){
    return (item.sobrenome == 'Jose') ? true : false;
});

let res = pessoa;

console.log(res)