/*//template strings

const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;


//concatenation way
//let result = 'the blog called ' + title + ' by ' + author  + ' has ' + likes + ' likes';
//console.log(result);

//template string way
let result = `Thee bog called ${title} by  ${author} has  ${likes} likes`
console.log(result);
//creating html templates

let html = `
<h2>${title}</h2>
<p> By ${author}</p>
<span>This blog has ${likes} likes</span>
`;

console.log(html);*/

let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas);
ninjas[1] = 'ken';
console.log(ninjas[1]);

let ages = [20,25,30,35];
console.log(ages[2]);

let random = ['tugce', 'crystal', 30,20];
console.log(random);

console.log(ninjas.length);
//array methods

 

let result3 = ninjas.join('/');
console.log(result3);

let result4 = ninjas.indexOf('chun-li');
console.log(result4);

let result5 = ninjas.concat(['ken', 'lool']);
console.log(result5);

let result6 = ninjas.push('ken');//destructive method changes the original value
console.log(result6);
console.log(ninjas);

let result7 = ninjas.pop();
console.log(result7);
console.log(ninjas);