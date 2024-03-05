// // Basic For Loop
for (var i = 1; i <= 5; i++) {
  console.log(i);
}

//    Sum of 1 to 10
var sumof1To10 = 0;
for (var i = 1; i <= 10; i++) {
  sumof1To10 += i;
}
console.log("The sum of numbers from 1 to 10 is:", sumof1To10);

//  Reverse Counting
for (var i = 10; i >= 1; i--) {
  console.log(i);
}

//    Multiplication Table

var multipliedNumber = 5;
for (var i = 1; i <= 10; i++) {
  var operation = multipliedNumber * i;
  console.log(operation);
}

//   Conclusion
/*For Loop is used in programming/Java Script when we want to use an element like loop*/

//    Pattern
var star = "*";
for (var i = 1; i <= 5; i++) {
  star = i;
  console.log(star);
}

// ****************************************Second Assigment
// Variables and MAth Expressions
var num1 = 10;
var num2 = 5;
// Calculating sum, difference, product, and quotient
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
// Printing the results to the console
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

//        Conditionals
var age = 17;
if (age == 17) {
  console.log("You are Adult");
} else {
  console.log("You are a minor");
}

//  Array
var arr = [];
arr.push("apple", "banana", "orange", "grape", "kiwi");
console.log(arr);

// Sum of 10 Natural Numbers
// Initialize a variable to store the sum
var sum = 0;

for (var i = 1; i <= 10; i++) {
  sum += i;
}

// Print the sum
console.log ("Sum of the first 10 natural numbers:", sum);



// Create an empty array named colors
var colors = [];

// Use a loop to add colors to the colors array
var colorNames = ["red", "green", "blue", "yellow", "orange"];
for (var i = 0; i < colorNames.length; i++) {
    colors.push(colorNames[i]);
}

// Print the colors array to the console
console.log("Colors array:", colors);

