//Syntax of for loop
/* for(statement 1; statement 2; statement 3){
       //code }

     --statement 1 -- it is executed one time.
       --statement 2 -- it is the condition base on which the loop will run(loop body is executed)
       --statement 3 -- it is executed everytime the loop body is executed.*/
for (let num = 0; num <= 5; num++) {
  console.log(num);
}
// Write a program to add first n natural number
const prompt = require("prompt-sync")();
let n = prompt("Enter the value of n ");
n = Number.parseInt(n);
let sum = 0;
for (i = 0; i < n; i++) {
  sum += i + 1;
}
console.log("sum of first " + n + " natural number is " + sum);


