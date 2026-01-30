 //* ============================
//* Data Types Section - part 2
//* ============================

//* Concatenation in JavaScript
//? In JavaScript, the + sign is not only used for arithmetic addition but also for string concatenation. When the + operator is used with strings, it concatenates the strings together.
//? It's important to note that if any operand of the + operator is a string, JavaScript will treat the other operands as strings as well, resulting in string concatenation. If both operands are numbers, the + operator performs numeric addition.

// const str = "Hello " + "World";
// console.log(str);

//* Type coercion is the automatic conversion of "values" from one data type to another.
//? It is a fundamental part of JavaScript and can be used to make code more readable and efficient.
//? There are two types of coercion in JavaScript: implicit and explicit. Implicit coercion happens automatically, while explicit coercion is done manually by the programmer.
//! It's worth noting that type coercion can lead to unexpected results, so it's essential to be aware of how JavaScript handles these situations.

// let sum = "5" + 10;
// console.log(sum);

//* ============================
//* Tricky Interview Questions
//* ============================
// console.log(10 + "20");
// console.log(9 - "5");
// console.log("Java" + "Script");
// console.log(" " + " ");
// let sum = " " + 0;
// console.log(typeof sum);
// console.log("vinod" - "thapa");
// console.log(true + true);
// console.log(true + false);
// console.log(false + true);
// console.log(false - true);
// console.log("5"%5);


// * Type_Casting -->
// ? Type casting in JavaScript means changing a value from one data type to another, like changing a string into a number or a number into a string

//* Types of Type Casting
//? 1. Implicit Type Casting (Automatic) JavaScript does it automatically when needed.

//  "5" - 1  //=> 4

//*2. Explicit Type Casting (Manual)

// ? You do it yourself using functions.

// Number("5")  //? 5


// console.log(false/true); // ?0
//console.log(5 != "5");

//* ====== The End ======


