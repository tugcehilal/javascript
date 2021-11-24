//for loops

/*for (let i = 0; i<5; i++){
  console.log('in loop:', i);
}

console.log('loop finished');*/

const names = ['shaun', 'mario', 'luigi'];

 for (let i =0; i<names.length; i++){
    // console.log(i, names[i]);
     let html = `<div>${names[i]}</div>`
     console.log(html);
 }


 let k = 0;
while (k< names.length){
console.log('while names '+names[k]);
k++;
}

let l = 5;

do{
        console.log('value of l is:', l);
        l++;
} while(l<5);
let j = 5;
while (j<5){
   console.log(' j in loop: ', j);
   j++;
}

//if statements
const age = 25;

if(age>20){
    console.log('you are over 20 years old.');
}

const ninjas = ['shaun','ryu','chun-li','yashi'];
if(ninjas.length>4){
    console.log("that's a lot of ninjas");
}

//logical operators OR || and AND &&
const password = 'p@ss12';
if(password.length >= 12 && password.includes('@')){
    console.log('that password is mighty strong');
}else if(password.length>= 8 ||password.includes('@') && password.length >=5 ){
console.log('that password is long enough!');
}else{
    console.log('password is not long enough');
}

//logical NOT (!)

let user = false;

if(!user){
 console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);

//break and contiue

const scores = [50, 25,0,30, 100, 20, 10];

for(let m = 0; m<scores.length; m++){
  if(scores[m]===0){
      continue;
  }

  console.log('your score: ', scores[m]);
  if(scores[m] === 100){
      console.log('you got to top score');
      break;
  }
}

//switch statements


const grade = '50';//strict equality

switch(grade){
case 50:
    console.log('you got an A');
    break;
case 'B':
    console.log('you got an B');
    break;
case 'C':
    console.log('you got an C');
    break;
case 'D':
    console.log('you got an D');
    break;
case 'E':
    console.log('you got an E');
    break;
default:
    console.log('not a valid grade');

}



if(grade == 'A'){

}else if(grade === 'B'){

}else if(grade === 'C'){

}else if (grade == 'D'){

}else if(grade == 'E'){

}else{

}

//variables & bloack scope
let age23 = 30;

//let age23 = 50;
//iside if bloackif i just use age23 it refers to globacl variable
//if i use let it redefines another age
if (true){
    
   let age23 = 50;
   let name = 'shau';
   // age23 = 40;
    console.log('inside code block:',age23, name );

    if(true){
        let age23 = 48;
        console.log('inside second code bloack: ',age23 );
        var test = 'hello';
    }
}

console.log('outsie code block:',age23, name, test );