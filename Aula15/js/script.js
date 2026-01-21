function meuEscopo () {
    
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');


    function recebeEventoForm (evento) {
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        evento.preventDefault();
        return nome.Value, sobrenome.Value, peso.Value, altura.Value;
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();