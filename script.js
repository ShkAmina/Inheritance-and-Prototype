
// Q1
// function Parent(name) {
//   this.name = name;
// }
// Parent.prototype.print = function() {
//   console.log(`Hii, I am  ${this.name}`);
// }
// function Child(name) {
//   Parent.call(this, name);
// }
// Child.prototype = Object.create(Parent.prototype);
// const child = new Child('Amina');
// child.print();



// Q2
// const plusGFather = {
//     sayHi : function() {
//         console.log(`Hey Plus GFather Say Hi`);
//     }
// }
// const GFather = Object.create(plusGFather)

// GFather.sayHello = function() {
//         console.log(`Hey GFather Say Hello`);
// }

// const Father = Object.create(GFather)

// Father.sayHey = function() {
//     console.log(`Hey father Say Hey...`);
// }

// const child = Object.create(Father);
// child.sayHi();
// child.sayHey();
// child.sayHello();




// Q3
// Array.prototype.sum = function() {
//   return this.reduce((acc, curr) => acc + curr, 0);
// }


// const array1 = [5, 4, 3, 2, 1];
// const array2 = [50, 60, 70];
// const array3 = [500, 600, 700, 800];

// console.log(array1.sum()); 
// console.log(array2.sum()); 
// console.log(array3.sum()); 


// Q4
// function allKeys(obj) {
//   if (!isObject(obj)) return [];
//   var keys = [];
//   for (var key in obj) keys.push(key);
//   return keys;
// }
// function isObject(obj) 
// {
//   var type = typeof obj;
//   return type === 'function' || type === 'object' && !!obj;
// }
// function Student(name) {
// this.name = name;
// }
// Student.prototype.rollno = true;
// console.log(allKeys(new Student("Amina")));
