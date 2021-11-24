//object literal
const blogs = [
    {title:'besttitle', likes: 30},
    {title:'lolok', likes: 50}
];
console.log(blogs);
let user = {
    name: 'crystal',
    age: 30,
    email: 'crystalgmail.com',
    location: 'berlin',
    blogs: ['blog1', 'blog2'],
    blogs2: [
        {title:'besttitle', likes: 30},
        {title:'lolok', likes: 50}
    ],
    login:function(){
        console.log('th user logged in');
    },
    logout(){
        console.log('the useer logged out');
    },
    logBlogs: function(){
     //console.log(this.blogs);
     console.log('the user has written the following blogs:');
     this.blogs2.forEach(blog =>{
         console.log(blog.title, blog.likes);
     })
    },
    logBlogs2: () => {
        console.log(this);
        
       }
};
//when we use a normal function as a method and invoke that method,
//javascript sets the value of the this keyword to the object 
//that the method was used on. 
user.login();
user.logout();
user.logBlogs();
user.logBlogs2();

//global onject = windows object
console.log(this);

console.log(user);
console.log(user.name);

const name = 'mario';
name.toUpperCase();


user.age = 35;
console.log(user.age);

const key = 'location';
console.log(user[key]);// =user['location']

console.log(user['location']);
user['name'] = 'tugce';
console.log(user['name']);

console.log(typeof user);

//Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers

const random = Math.random();
console.log(random);
console.log(Math.round(random*100));

//primitive nubmers, strings, Boolean, null, ondefined, symbols
//reference: all objects, object literals, arrays, fnctions, dates

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

const userOne = { name:'ryu', age:30};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;
console.log(userOne, userTwo);
