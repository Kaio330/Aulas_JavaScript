const nomes = ['Eduardo','Maria','Joana'];
const novo = [...nomes];
nomes[2] = 'João';
delete novo[2];

nomes.push('Carlos');
nomes.unshift('Wallace');
console.log(nomes);

const nome = 'Kaio Melugo Vieira';
const nomeSeparados = nome.split(' ');
console.log(nomeSeparados);