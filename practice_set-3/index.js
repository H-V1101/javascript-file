// Q-1 -- Write a program to print a marks of a student in an object using fot loop

// obj = {harry : 98 ,rohan:78 , aakash : 60}.

let marks = {
    harry:98,
    rohan : 78,
    aakash:60
}
for (let i=0;i<Object.keys(marks).length;i++){
    console.log("marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
}
// Object.keys(marks) gives the key of the object and .length gives the length of the array.


// Q-2 -- write a code in Q-1 in for in loop?

for (let key in marks){
    console.log("marks of "+key+" are "+marks[key]) // same as above question but in easy way.
}

// Q-3-- write a program to print "try again" until the user entered the correct no?


let i;
let cn = 44;
const prompt = require("prompt-sync")();
while (i != cn) {
  
  i = Number.parseInt(i);
  i = prompt("enter the number :");
  
}
console.log("You entered correct number");


// Write a function to find a mean of 5 number.

let a = prompt("write 1st no:");
let b = prompt("write 2nd no:");
let c =prompt("write 3rd no:");
let d = prompt("write 4th no:");
let e = prompt("write 5th no:");
const mean=(a,b,c,d,e)=>{
    return(a + b + c+ d +e)/4;
}
console.log(mean(a,b,c,d,e)/4);



