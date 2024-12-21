console.log("welcome to CN5006");
console.log("This is lab 1");
console.log("This is my first programe")
console.log("Well come John your month salary is 500000")

const num1 = 30;
const num2 = 15;
const sum = num1 + num2;
console.log("The sum is " + sum);

//input from user

const Prompt = require ("prompt-sync")({sigint: true})

//program that checks if the number is positive, negative or zero
// input from the user
const number = parseInt(Prompt("Enter a number: "));

//check if number is greater than 0
if (number > 0) {
  console.log("The number is positive");
}
// check if number is 0
else if (number == 0) {
  console.log("The number is zero");
}
// if number is less than 0
else {
  console.log("The number is negative");
}
