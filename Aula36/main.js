function retornaFuncao() {
    const nome = 'Kaio';
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao();
console.dir(funcao());

// Closure é a habilidade que a função tem de acessar seu escopo lêxico