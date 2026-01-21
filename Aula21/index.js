const pessoa = {
    nome: 'kaio',
    sobrenome: 'Melugo',
    idade: 21,
    endereco: {
        rua: 'Av Brasil',
        numero: 831
    }
};

// Atribuição via desestruturação em Objetos
const { nome = 'Não existe', sobrenome, idade, endereco: {rua, numero} } = pessoa;
const {nome2 , ...resto} = pessoa
console.log(resto);