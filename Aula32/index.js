// Declaração de função (Function hoisting)
falaOi();
function falaOi(){
    console.log('Oi');
}

// First-Class objects (Objeto de primeira classe)
// Function expression

const souUmDado = function(){
    console.log('Sou um dado.');
};


function exectaFuncao(funcao){
    console.log('Vou executar sua função abaixo: ');
    funcao();
}

exectaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

// Dentro de um objeto
const obj = {
    falar (){
        console.log('Estou falando...');
    }
};

obj.falar();