// Factory function (Função Fábrica)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, sobrenome,
        // Getter
        get nomeComlpeto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter
        set nomeComlpeto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        // this pega o valor de quem está chamando ele
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Kaio', 'Melugo', 1.80, 90);
console.log(p1.imc);
const p2 = criaPessoa('Kaio', 'Vieira', 1.50, 90);
console.log(p2.imc);
console.log(p1.fala('falando sobre JS'));
p1.nomeComlpeto = 'Kaio Melugo Vieira';
console.log(p1.nome);
console.log(p1.sobrenome)