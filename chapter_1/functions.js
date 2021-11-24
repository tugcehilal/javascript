//function declaration
console.log('hello lok');
function greet(){
    console.log('hello there');
}

//function expression
const speak = function(){
console.log('good day');
};//function expression
//greet();
//greet();
//greet();

speak();
speak();
speak();

const speak2 = function(name = 'tugce', time = 'night'){
    console.log(`good   ${time} ${name}`);
    };//function expression

    speak2('mario', 'morning');

    speak2('shaun','evening');
    speak2('maria');

    const calcArea = function(radius){
        //let area = 3.14 * radius**2;
        // console.log(area);
        //return area;
        return 3.14 * radius**2;
    };
    const area = calcArea(5);
    console.log('ar ' + area);
    const calcVol = function(area){
       return area * 2;
    };
    const c = calcVol(area);
    console.log(c);
    const calcAreaArrow = (radius) => {
        return 3.14 * radius**2;
    };

    const areaArrow = calcAreaArrow(5);
    console.log('ar arrw ' + areaArrow);

    const calcAreaArrow2 = radius => {
        return 3.14 * radius**2;
    };

    const areaArrow2 = calcAreaArrow2(5);
    console.log('ar arrw2 ' + areaArrow2);

    
    //const calcAreaArrow3 = radius => 3.14 * radius**2;
    const calcAreaArrow3 = radius => 3.14 * radius**2;
    const areaArrow3 = calcAreaArrow3(5);
    console.log('ar arrw3  ' + areaArrow3);

    const greeting = () => 'hello, world';
    const test = greeting();
    console.log(test);
    const bill =(products, tax) => {
        let total = 0;
        for(let i= 0; i<products.length; i++){
            total += products[i] + products[i] * tax;
        }
        return total;
    };
    
    console.log(bill([10,15,30], 0.2))

    //functions

    const grt = () => 'hello';
    let resultOne = grt();
    console.log(resultOne);
    //methods

const name = 'tugce';
name.toUpperCase();

let resutTwo = name.toUpperCase();
console.log(resutTwo);

//callbacks & foreach

const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
}
//we have to define value here because callbackfunction takes one parameter
/*myFunc(function(value){
    console.log(value);
});*/

myFunc(value =>{
    console.log(value);
});

let people = ['mario', 'luigi','ryu','shaun', 'chun-li', 'tugce'];

people.forEach(function(){
    console.log('something');
});
//the first parameter is whatever the value it has when iterating
people.forEach(function(person){
    console.log(person);
});

people.forEach(person=>{
    console.log(person);
});

people.forEach((person,index)=>{
    console.log(index, person);
});

const logPerson =(person, index) =>{
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);

//get a reference to the ul
const ul = document.querySelector('.people2');
const people2 = ['mario', 'luigi','ryu','shaun', 'chun-li', 'tugce'];

let html = ``;
people2.forEach(person => {
//create html template
html += `<li style="color: purple">${person}</li>`
})

console.log(html);
ul.innerHTML = html;