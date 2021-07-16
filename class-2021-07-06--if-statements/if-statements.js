// = : means assignment
// === / == : means equal

// if statement has three things:
// - (if) keyword
// - condition
// - block of code

// === / === : equal 
// > : greater than
// < : less than
// >= : greater than or equal
// <= : less than or equal

// this = that =====> assign that to this

var condition = 10 > 15; // false (10 is not greater than 15)

console.log("The condition value is: " + condition); // false

//--------------------------------------------------------
// BIG NOTE FOR KIM:
// TRUE : MEANS EXECUTE
// FALSE : MEANS DON'T EXECUTE
//--------------------------------------------------------


if (condition) {
    console.log("will execute only if true!");
}

//--------------------------------------------------------


if (condition) {
    // do this
    console.log("will execute only if true! (Example 2)");
} else {
    // do that
    console.log("will execute only if false! (Example 2)");
}

//--------------------------------------------------------

if (condition) {
    // do this
    console.log("will execute only if true! (Example 3)");
} else if (true) {
    console.log("will execute only if scond is true! (Example 3)");
} else {
    // do that
    console.log("will execute only if false! (Example 3)");
}

//--------------------------------------------------------

// only first true condition will be executed.
// the rest of the conditions will be igonred.

// if all is false only else will be executed.

if (false) {
    console.log("line 1");
} else if (false) {
    console.log("line 2");
} else if (false) {
    console.log("line 3");
} else if (false) {
    console.log("line 4");
} else if (false) {
    console.log("line 5");
} else {
    console.log("line 6");
}


//--------------------------------------------------------
// AND : &&
// OR : ||

var num = 4;

// AND: means both sides must be true
// OR: means at least one side is true

// and example
if (num <= 10 && num >= 5) {
    console.log(num + " is a valid number!");
}

// or example
if (num <= 10 || num >= 5) {
    console.log(num + " is a valid number!");
}