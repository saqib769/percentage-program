// let a = "Muhammad"
// let b = "Saqib";

// console.log(a , b)

// let a = 50;
// let b = 140;

// console.log(a - b);

// let a = "Saqib";
// let b = "is a good person"

// console.log(a , b)

// var num1 = 20;
// var num2 = 40;

// var addition = num1 + num2;

// console.log(addition)

// var a = 80;
// var b = 70;


// if(a >= b && b >= a){
//     console.log("A grade");
// }
//  else if(a <= b && b >= a){
//        console.log("B grade")
//  }
//  else{
//     console.log("C grade")
//  }

var totalMarks = 400;


var engMarks = +prompt("Enter your marks");
var physicsMarks = +prompt("Enter your marks");
var chemistryMarks = +prompt("Enter your marks");
var biologyMarks = +prompt("Enter your marks");

var obtainedMarks = engMarks + physicsMarks + chemistryMarks + biologyMarks;

var percentage = obtainedMarks /  totalMarks * 100

console.log("you got " + obtainedMarks + " %");
    

