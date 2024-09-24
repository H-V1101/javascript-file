//Create an array of number and take input from user to add the number of this array
// const prompt =require("prompt-sync")();
// let a =prompt("write ur number:");
// a=Number.parseInt(a);
// let arr=[67,87,98,89,23,76];
// a=Number.parseInt(a);4
// arr.push(a);
// console.log(arr);


//print an 0 in array repeat the process unteil 0 is printed in it.
// const prompt= require("prompt-sync")();
// let arr = [12,43,22,11,3,89,87];
// let a;
// do{
//  a = prompt("Enter a Number");
// a = Number.parseInt(a);
// arr.push(a);
// }while(a != 0);
// console.log(arr);

// filter the number divisible by 10 from a given array.
// const prompt=require("prompt-sync")();
// a = prompt("Enter a Number");
// a=Number.parseInt(a);
let arr= [10,29,20,30,40,50,87,89];
let a =arr.filter((a)=>{
    return a % 10==0;
})
console.log(a);