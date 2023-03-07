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

function multiply(a, b) { return a * b };

const add = (function () {
    let counter = 0;
    return function () {
        counter += 1;
        return counter;
    }
})();

function myFun() {
    document.getElementById("demo").innerHTML = add();
}

// Object

const obj = {
    fName: "Jay",
    lName: "Koshti",
    cars: [
        { name: "Ford", models: ['Focus', 'Mustang', 'Fiesta'] },
        { name: "BMW", models: ["320", "X3", "X5"] }
    ]
}

let x = "";

for (let i in obj.cars) {
    x += "<h1>" + obj.cars[i].name + "</h1>"
    for (let j in obj.cars[i].models) {
        x += obj.cars[i].models[j] + "<br>";
    }
}

document.getElementById("demo").innerHTML = x;

// Iterable

myItr = {};

myItr[Symbol.iterator] = function () {
    let a = 0;
    done = false;
    return {
        next() {
            a += 10;
            if (a == 100) { done = true; }
            return { value: a, done: done };
        }
    };
}

let iterat = myItr[Symbol.iterator]();

let txt = "";
while (true) {
    const result = iterat.next();
    if (result.done) break;
    txt += result.value + '<br>';
}

document.getElementById("demo2").innerHTML = txt;

// call back
function myDisplayer(some) {
    document.getElementById("demo3").innerHTML = "<h2> res = " + some + "</h2>";
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// Promises

function Display(some) {
    document.getElementById("demo4").innerHTML = some;
}

let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;

    // The producing code (this may take some time)

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function (value) { Display(value); },
    function (error) { Display(error); }
);

// JSON

const text1 = '{"name":"John", "age":30, "city":"New York"}'
const object1 = JSON.parse(text1);
document.getElementById("json1").innerHTML = object1.name + ", " + object1.age;

// When using the JSON.parse() on a JSON derived from an array, 
// the method will return a JavaScript array, instead of a JavaScript object.
const text2 = '[ "Ford", "BMW", "Audi", "Fiat" ]';
const myArr = JSON.parse(text2);
document.getElementById("json2").innerHTML = myArr[0];


/* Exception */

// 1. parsing dates 
const text3 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const object3 = JSON.parse(text3);
object3.birth = new Date(object3.birth);
document.getElementById("json3").innerHTML = object3.name + ", " + object3.birth;

// another way

const object3_1 = JSON.parse(text3, function(key, value) {
    if(key=="birth") {
        return new Date(value);
    }
    else {
        return value;
    }
});
document.getElementById("json3_1").innerHTML = object3_1.name + ", " + object3_1.birth;

// 2. parsing function

const text4 = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';
const object4 = JSON.parse(text4);
object4.age = eval("(" + object4.age + ")");
document.getElementById("json3_1").innerHTML = object4.name + ", " + object4.age(); 

// JSON.stringify()
const object5 = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(object5);
document.getElementById("stingify1").innerHTML = myJSON;

// using array
const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON1 = JSON.stringify(arr);
document.getElementById("stingify2").innerHTML = myJSON1;

// using local storage

// Storing data:
const myObj = { name: "John", age: 31, city: "New York" };
const myJSON2 = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON2);

// Retrieving data:
let text5 = localStorage.getItem("testJSON");
let object6 = JSON.parse(text5);
document.getElementById("stingify3").innerHTML = object6.name;

// Fetching data from data.php
// const xmlhttp = new XMLHttpRequest();

// xmlhttp.onload = function() {
//   const myObj = JSON.parse(this.responseText);
//   document.getElementById("jPhp1").innerHTML = myObj.name;
// }
// xmlhttp.open("GET", "data.php");
// xmlhttp.send();


/* HTML DOM manipulation */


// const div = document.createElement('div')

// div.innerText = "Hello World";   // will apply style
// div.textContent = "New Hello World"; // will not apply style

// div.innerHTML  = "<i>I am italic</i>" // for rendering html inside string
// alternative
// const i = document.createElement('i');
// i.innerText = "I am italic too"
// body.append(i);

// body.append(div);
const body = document.body;
const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

// spanHi.remove();  //easy

//alternative
div.removeChild(spanBye)


console.log(spanHi.getAttribute('id'));
console.log(spanHi.getAttribute('title'));
//alternarive
console.log(spanHi.id); //easy

console.log(spanHi.dataset)
console.log(spanHi.dataset.test)




