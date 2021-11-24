const contentson = document.querySelector('p');
console.log(contentson);
console.log(contentson.classList);



/*contentson.classList.add('error');
contentson.classList.remove('error');
contentson.classList.add('success');*/

const ptags = document.querySelectorAll('p');

ptags.forEach( p => {
    if (p.textContent.includes('success')){
    p.classList.add('success');
}else if (p.textContent.includes('error')){
    p.classList.add('error');}
})

const titleson = document.querySelector('.title');
titleson.classList.toggle('test');
titleson.classList.toggle('test');
