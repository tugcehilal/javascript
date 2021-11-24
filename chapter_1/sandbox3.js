let age;
console.log(age, age+3,`age is ${age}` );

let age2 = null;
console.log(age2, age2+3,`age is ${age2}` );

//boolean & comparasions
console.log(true, false, "true", "false");

//methods can return booleans

let email = 'luigi@thenetninja.co.uk';
let nanmes = ['mario', 'luigi', 'toad'];
let result = email.includes('!');
let result2 = email.includes('luigi');
console.log(result, result2);

//comparison operators

let age33 = 25;
console.log(age33 == 25);
console.log(age33 == 30);
console.log(age33 != 25);
console.log(age33 > 20);
console.log(age33 < 20);
console.log(age33 <= 20);
console.log(age33 >= 25);

let name = 'shaun';

console.log(name == 'shaun'); //abstract equality loose equality ( a values type isnot considred)
console.log(name == 'Shaun');
console.log(name == 5);


console.log(name > 'crystal'); //alphabetic
console.log(name > 'Shaun'); //alphabetic lower
console.log(name > 'Crystal'); //alphabetic lower

let agee = 25

//loose comparasion (different types can still be equal)
console.log(agee == 25);
console.log(agee == '25');
console.log(agee != 25);
console.log(agee != '25');
//strict comparasion (different types can not be equal)
console.log(agee === 25);
console.log(agee === '25');
console.log(agee !== 25);
console.log(agee !== '25');

//type conversation

let score = '100';
console.log(typeof score);
console.log(score + 1);

score = Number(score);
console.log(score + 1);
console.log(typeof score);

//let results  = Number('hello');

let result45 = String(50);
console.log(result45, typeof result45);

let result46 = Boolean(100); //positive numbers truty value
let result47 = Boolean(0);
let result48 = Boolean('0');// strings truthy
let result49 = Boolean('');// empty
console.log(result46, typeof result46);
console.log(result47, typeof result47);
console.log(result48, typeof result48);
console.log(result49, typeof result49);

//for loops

