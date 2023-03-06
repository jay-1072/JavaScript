// Variable

{
    let x = 2;
    // var x = 3; Uncaught SyntaxError: Identifier 'x' has already been declared
    console.log(x);
}

// carName = "Volvo";
// let carName = "KIA";
// console.log(carName); Uncaught ReferenceError: Cannot access 'carName' before initialization

// const PI;
// PI = 3.14; Uncaught SyntaxError: Missing initializer in const declaration

const PI = 3.14 // fine
// PI = 3.145 Uncaught TypeError: Assignment to constant variable.


// Scope

// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

// This code example will declare a global variable , even if the value is assigned inside a function.carName

/*

myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}

console.log(carName);

*/

// Closure

// function x() {
//     let a = 10;
//     function y() {
//         var b = 20;
//         function z() {
//             let c = 30;
//             console.log(a, b, c);
//         }
//         b = 200;
//         z();
        
//     }
//     y();
// }
// x();

// Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Carrot");

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

document.getElementById("demo").innerHTML = text;

function myFunction(value) {
  text += "<li>" + value + "</li>";
}

// Arrays with named indexes are called associative arrays (or hashes).
// JavaScript does not support arrays with named indexes

// Array vs Object

// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.
 
// const points = [40]; // Create an array with one element:
// is not the same as:
// const points = new Array(40);  //Create an array with 40 undefined elements:


// Function

console.log(multiply(4, 3)); // Uncaught ReferenceError: Cannot access 'x' before initialization

function multiply (a, b) {return a*b};

const add = (function() {
    let counter = 0;
    return function() {
        counter += 1;
        return counter;
    }
})();

function myFun() {
    document.getElementById("demo").innerHTML = add();
}

// Object

const obj = {
    fName:"Jay",
    lName:"Koshti",
    cars: [
        {name:"Ford", models:['Focus', 'Mustang', 'Fiesta']},
        {name:"BMW", models:["320", "X3", "X5"]}
    ]
}

let x = "";

for(let i in obj.cars) {
    x += "<h1>" + obj.cars[i].name  + "</h1>"
    for(let j in obj.cars[i].models) {
        x += obj.cars[i].models[j] + "<br>";
    }
}

document.getElementById("demo").innerHTML = x;





