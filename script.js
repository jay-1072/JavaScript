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

