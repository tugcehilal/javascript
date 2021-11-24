//once the html documen is loaded in the browse
// the browser create an object which modules this doument which is dom.

/*const para = document.querySelector('p');//first p tag
const error = document.querySelector('.error');//first p tag
const diverror = document.querySelector('div.error');//first p tag
const selector = document.querySelector('body > div:nth-child(2) > p:nth-child(2)');//first p tag

/*console.log(para);
console.log(error);
console.log(diverror);
console.log(selector);*/

const paras = document.querySelectorAll('p');
paras.forEach(parra => {
    console.log(parra);
})
console.log(paras[0]);

//
const title = document.getElementById('page-title');
console.log(title);

//get element by their last name
const errors = document.getElementsByClassName('error');
console.log(errors);
/*errors.forEach(error => {
    console.log(error);
})// not working */
//get elements by their tag name 

const kparas = document.getElementsByTagName('p');
console.log(kparas);
console.log(kparas[1]);

const paragph = document.querySelector('p');
console.log(paragph.innerText, 'olo');
//paragph.innerText += 'tugce is great';

const paragphs = document.querySelectorAll('p');

paragphs.forEach(para =>{
console.log(para.innerText);
para.innerText += ' new text';
})

const content = document.querySelector('.content');

/*console.log(content.innerHTML);
content.innerHTML += '<h2> this is the new h2</h2>';

const people = ['mario', 'luigi','yoshi'];

people.forEach(person =>{
    content.innerHTML  += `<p>${person}</p>`
})*/


const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://wwww.hoppala.com');
link.innerText = 'Hoppala';

const message = document.querySelector('p');
console.log(message.getAttribute('class'));
message.setAttribute('class', 'success');
message.setAttribute('style', 'color: green;');

const title2 = document.querySelector('h1');
//console.log(title.innerText);
//title2.setAttribute('style', 'margin: 50px;');

console.group(title2.style);
console.group(title2.style.color);

title2.style.margin = '50px';
title2.style.color = 'crimson';

title2.style.fontSize = '60px';
title2.style.margin = '';

