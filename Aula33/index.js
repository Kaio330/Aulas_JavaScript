// a função definida com a palavra function 
// tem uma variavel arguments que sustenta todos os argumento enviados 
function funcao(a, b, c){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }

    console.log(total);
}
funcao(10, 9, 8, 7, 6, 5, 4, 3, 2, 1);

function funcao2(a, b, c, d, e, f){
    console.log(a, b, c, d, e, f);
}

funcao2(1, 2, 3);

function funcao3(a, b = 2, c = 5){

    console.log(a + b + c);
}
funcao3(2, undefined, 20);

function funcao4({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
let obj = {nome: 'kaio', sobrenome: 'melugo', idade: 21 };
funcao4(obj);

// rest operator (...) Pega todos os restantes dos argumentos
const conta = function(operador, acumulador, ...numeros){
    for (let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);