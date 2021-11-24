/*let age = 25;
let year = 2019;

//log things o console
console.log(age, year);

age = 30;
console.log(age);

const points = 100;

console.log(points);

var score = 75;
console.log(score);

//strings
console.log('helloo, world123'); 

let email = 'mario@thenetninja.co.uk';
console.log(email);

//string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;

//getting characters
console.log(fullName);

console.log(fullName[0]);

//string length
console.log(fullName.length ); 

//string methods
console.log(fullName.toUpperCase());//some methods alter the original array, some not.
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index); 

let email2 = 'mario@thenetninja.co.uk';

let result4 = email2.lastIndexOf('n');

let result1 = email2.slice(4,10);
let result2 = email2.substr(4,10);
console.log(result1, result2);
let result3 = email.replace('m','w');
let result5 = email.replace('n', 'w');//first n

console.log(result3);*/

let radius = 10;
const pi = 3.14;

//console.log(radius, pi);

//mat operators +, -, *, /, **, %

//console.log(10/2);
//let result7 = radius % 3;

let result8 = pi * radius**2
console.log(result8);

//order of operation - Bracets Indices(power) Division Multiplication Addition Substraction

let result10 = 5 * (10-3)**2
console.log(result10);

let likes = 10;

//likes = likes + 1;
//likes++;
//likes--;
//likes += 8;
//likes -= 5;
//likes *= 2;
likes  /= 2;
console.log(likes);

//Nan - not a number

console.log(5/ 'hello');
console.log(5*'hello');

let result20 = 'the blog has ' + likes + ' likes';
console.log(result20);
