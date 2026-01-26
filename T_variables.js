
        //        -:Data Types & Variables:-        //
 
                // VARIABLES //

                /*
const accountId=144553 // fixed value
let accountEmail="dev@google.com"
var accountPass="12345"
accountCity="jaipur"

// accountId=2314687 // not allowed  beacuse alredy decleared
// console.log(accountId);

accountEmail="gp@345google.com"
accountPass="234511"
accountCity="delhi" // it's alos possible but not prefer

//   Not use var-->Can create bugs — because it’s hoisted and can be redeclared
//   Use let — cannot be redeclared and not accessible before declaration 




console.log(accountId)
console.log(accountEmail)
console.log(accountPass)
console.log(accountCity)

let accountState;
console.log(accountState) // show undefined


*/

// 

                // DATA TYPES //


// "use strict"; // in browser or git kit using this tells that treat all js code as newer version
// alert("hello") // give error because of  using node js not using browser

// console.log("Devendra"); console.log(3+3) // code readability should be high bit it's ALSO correct

/*  Data Types:- 
 
let age=20    // number
let name=Devendra   // string
let isStudent=true   // boolean


2 type of data types in javascript-
1.Primitive (basic building blocks)types
2.Non-Premitive(reference )types


               // Premitives //


| Type          | Example                            | Description                                       | Range / Limitations                                                                                                                                |
| ------------- | ---------------------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Number**    | `let x = 10;`                      | Used for both integers and floating-point numbers | Range: `-(2^53 - 1)` to `(2^53 - 1)` → approx **-9,007,199,254,740,991 to +9,007,199,254,740,991**<br>Decimal precision: **up to 15-17 digits** |
| **BigInt**    | `let big = 12345678901234567890n;` | Used for integers **larger than Number range**    | No fixed range — can store **any size integer** (limited only by memory)                                                                         |
| **String**    | `let name = "Dev";`                | Represents text data (characters inside quotes)   | No specific limit — depends on system memory                                                                                                    |
| **Boolean**   | `let isTrue = true;`               | Represents logical values `true` or `false`       | Only **two values** — `true` or `false`                                                                                                            |
| **Undefined** | `let a;`                           | Automatically assigned to uninitialized variables | Only **one value:** `undefined`                                                                                                                    |
| **Null**      | `let b = null;`                    | Represents empty / intentional “nothing” value    | Only **one value:** `null`                                                                                                                         |
| **Symbol**    | `let s = Symbol("id");`            | Unique and immutable identifiers                  | Always **unique** (no range — each symbol is different)                                                                                            |

** Everything like int , float ,double is Number except BigInt , based on 64-bit floating point format
** if : let x=null so typeof x will  shows object cause of old js bug
 if a=5
 b=5n
 so a+b=>TypeErro beacuse 5-> is number and 5n->BigInt to get right ouptut change one dataype like ->
 console.log(BigInt(a)+b)     
                                 
                        // Non-premtive //
| Type         | Example                              | Description                                                          | Key Methods / Features                                |
| ------------ | ------------------------------------ | -------------------------------------------------------------------- | ----------------------------------------------------- |
| **Object**   | `let user = {name: "Dev", age: 20};` | Base structure for storing key–value pairs                           | `Object.keys()`, `Object.values()`, `Object.assign()` |
| **Array**    | `let arr = [1, 2, 3];`               | Ordered list (index-based)                                           | `push()`, `pop()`, `map()`, `filter()`, `reduce()`    |
| **Function** | `function greet(){}`                 | First-class object — can be assigned, passed, returned               | `call()`, `apply()`, `bind()`                         |
| **Date**     | `let now = new Date();`              | Handles date/time values                                             | `.getFullYear()`, `.toLocaleString()`                 |
| **RegExp**   | `let reg = /[a-z]/i;`                | Pattern matching and search                                          | `.test()`, `.exec()`, `.match()`                      |
| **Map**      | `let map = new Map([["a", 1]]);`     | Key-value store (keys can be any type)                               | `.set()`, `.get()`, `.has()`, `.forEach()`            |
| **Set**      | `let set = new Set([1, 2, 2, 3]);`   | Stores **unique** values                                             | `.add()`, `.delete()`, `.has()`, `.size`              |
| **WeakMap**  | `let wm = new WeakMap();`            | Like Map, but keys must be **objects** and are **garbage-collected** | `.set()`, `.get()`, `.has()`                          |
| **WeakSet**  | `let ws = new WeakSet();`            | Like Set, but only holds **object references**                       | `.add()`, `.has()`, `.delete()`                       |



*/

          // premp. //

// console.log(typeof "devendra")
//  console.log(typeof null)

// let score="33" //string
// let num=Number(score) // now number type 
 
// let digit="123abc" //string
// num1=Number(digit)
// console.log(typeof num1);  // give type number
// console.log(num1);     //NaN 

// let res=null //null datatype
// num2=Number(res)
// console.log(typeof num2); // number datatyoe
//  console.log(num2);   // give 0


// let report=undefined

// let report1;
// console.log(typeof report1);  // undefined

// console.log(typeof Number(report));  // D.t. number
// console.log(Number(report));  // Nan
// console.log(String(report));  // undefined

// let  s=1
// console.log(Boolean(s));  // true give dataype is boolean  but for 0 , null and " " give false



// let email=Symbol('123')
// let email1=Symbol('123')
// console.log(email===email1);   // false , it is the work of symbol

 

              // non - premp. //

// let heros=['cap','iron','thor']  // array    
// let obj= {name:"dev", age:13} // object

// const myfun=function(){
//         console.log("hello worLd");
        
// }
// myfun()
