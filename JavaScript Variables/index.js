//variables = A container that store a value.
//            Behaves as if it were the value it contains.

// 1. declaration       let x;
// 2. assignment        x = 100;


//let x;
//x = 123; 

//or
//let x = 123;

//console.log(x);

//let age = 25;
//let price = 10.99;
//let gpa = 2.1;


//let firstName = "Bro";
//let favoriteFood = "Pizza";
//let email = "Han@example.com"

//console.log(typeof firstName);
//console.log(firstName);
//or
//console.log(`Your name is ${firstName}`);
//console.log(`My favoriteFood is ${favoriteFood}`)
//console.log(`Your email is ${email}`)
//console.log(`You are ${age} years old`);
//console.log(`The price is $${price}`);
//console.log(`Your gpa is: ${gpa}`)


//let online = false;
//let forSale = true;
//let isStudent = true;

//console.log (`Bro is online: ${online}`);
//console.log (`Is this car for sale: ${forSale}`);
//console.log (`Enrolled: ${isStudent}`);

let fullName = "Hanvibe";
let age = 25;
let isStudent = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;