console.log("Hello World!");

// variables
// camel case: my first var => myFirstVar
var myFirstVar = 10; // = : means assignment
console.log(myFirstVar);

// we use (var) to declare the variable
// once it is declared you don't need to say (var)
// you can't use two variables with the same name

//-----------------------------------------
// DATA TYPES: (Primitive Data Types)
//-----------------------------------------
//
// - Number: integers 10 , 20 30 ... , float, decimals 10.45, 0.2, ....
// - String: "Hello Wordl!" / 'Hello World!'
// - Boolean: false / true
// - null: means empty
// - undefined: by default if I don't intialize the variable it will undefined

// example of number type
var numberVar = 5.8;
console.log(numberVar);

var x1 = 5;
var y1 = 3;

var result1 = x1 + y1; // 5 + 3 => 8
console.log(result1);

result1 = x1 - y1;
console.log(result1);

result1 = x1 / y1;
console.log(result1);

result1 = x1 * y1;
console.log(result1);

result1 = x1 % y1; // (modulo) 5 / 3 => 1 --> 2
console.log(result1);


// example of string type
var stringVar = "Kim White";
console.log(stringVar);

var x2 = "Hello";
var y2 = "World";
var result2 = x2 + " " + y2; // concatenation
// space is a caharacter
console.log(result2);

// example of boolean type
var boolVar = false;
// ! : means not
console.log(!boolVar); // not false => true

// example of null
var nullVar = null;
console.log(nullVar); // empty

// example of undefined
var undefinedVar; // by default it will undefined
console.log(undefinedVar);

// x3 is not declared so it throw an error
// console.log(x3);

//-----------------------------------------
// DATA TYPES: (Composite Data Types)
//-----------------------------------------
//
// - Array: [10, 20, 50, 100] // has index which indicate the position of a value
// - Object: { a: 5, b: 8, c: 12, d: 100 } // key-value pair

// array example
var arr = [];
console.log(arr);

var arr1 = ["Ali", "Kim", 10, true, undefined, "that's it!"];
console.log(arr1);
console.log(arr1[2]);
console.log(arr1[5]);

// object example
var obj = {}
console.log(obj);
var obj1 = {
    firstItem: "Hello!",
    secondItem: 100,
    thirdItem: true
};

// key-value : the key is called property

console.log(obj1);