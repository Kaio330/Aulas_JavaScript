try {
    //executado quando não há erros
    console.log('abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch(e){
    //executado quando há erros
    console.log('Tratando o erro');
} finally{
    //executado sempre
    console.log('FINALLY: eu sempre sou executado');
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

function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
const data = new Date('01-01-1970 12:58:12');
const hora = retornaHora()
console.log(hora);
} catch(e){
    //tratar erro
} finally{
    console.log('Tenha um bom dia')
}


/* Anotações */
// Não exibir erros para o Usuario, sempre tratar erros quando você lançar um erro com throw

