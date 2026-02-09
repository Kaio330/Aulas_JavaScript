// IIFE -> Immediately invoked function expression

(function (idade, peso, altura) {
    console.log(123456);

    const sobrenome = 'Melugo'

    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Kaio'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(21, 90, 1.80);