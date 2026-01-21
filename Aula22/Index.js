for (let i = 0; i <= 5; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(`Linha ${i} ${par}`);
}

// percorrer arrays com for
const frutas = ['maçã', 'pêra', 'Uva'];
for (let i = 0; i < frutas.length; i++ ) {
    console.log(frutas[i]);

}