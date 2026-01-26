try {
    console.log(naoExisto)
} catch(e){
    console.log(e)
}

function soma(x, y){
    if(typeof x !="number" || typeof y !=
        'number'){
            //lançando erro
            throw new Error(" x e y precisam ser numeros");
        }

        return x + y;
}

//Capturando o erro
try{
    console.log(soma(5,6));
    console.log(soma('1',2));
} catch(error){
    console.log("Erro na inserção");
}

/* Anotações */
// Não exibir erros para o Usuario, sempre tratar erros quando você lançar um erro com throw
