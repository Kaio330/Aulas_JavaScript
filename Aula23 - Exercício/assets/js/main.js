const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

let container = document.querySelector('.container');
const div = document.createElement('div');
container.appendChild(div);

for (let i = 0; i < elementos.length; i++) {

   // if (i < 1) {
   // let [i] = elementos;
   // const tag = document.createElement(i.tag);
   // tag.textContent = (i.texto);
   // div.appendChild(tag);
   // }
//
   // else if (i < 2) {
   // let [,i] = elementos;
   // const tag = document.createElement(i.tag);
   // tag.textContent = (i.texto);
   // div.appendChild(tag);
   // }
//
   // else if (i < 3) {
   // let [,,i] = elementos;
   // const tag = document.createElement(i.tag);
   // tag.textContent = (i.texto);
   // div.appendChild(tag);
   // }
//
   // else if (i < 4) {
   // let [,,,i] = elementos;
   // const tag = document.createElement(i.tag);
   // tag.textContent = (i.texto);
   // div.appendChild(tag);
   // };
//
    let = {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);
