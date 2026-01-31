function escopo() {
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.btn-iniciar');
    const pausar = document.querySelector('.btn-pausar');
    const zerar = document.querySelector('.btn-zerar');


    let tempo = new Date(0);
    tempo.setHours(0, 0, 0);
    let timer = 0;

    document.addEventListener('click', function (e) {
        const el = e.target;
        if (el.classList.contains('btn-zerar')) {
            tempo.setHours(0, 0, 0);
            clearInterval(timer);
            relogio.innerHTML = tempo.toLocaleTimeString('pt-br');
            relogio.style.cssText = 'color: black;';
        }

        if (el.classList.contains('btn-iniciar')) {
            clearInterval(timer);
            timer = setInterval(() => {
                tempo.setSeconds(tempo.getSeconds() + 1);
                relogio.innerHTML = tempo.toLocaleTimeString('pt-BR');
            }, 1000);
            relogio.style.cssText = 'color: black;';
        }

        if (el.classList.contains('btn-pausar')) {
            clearInterval(timer);
            relogio.style.cssText = 'color: red;';
        }
    });
}

escopo();
