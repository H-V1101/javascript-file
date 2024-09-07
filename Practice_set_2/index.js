//Q-1 - Use logical operator to find whether the age of a person lies between 10 and 20?

const prompt=require("prompt-sync")();
let age = prompt("write your age ");
 age=Number.parseInt(age);
if (age>10 && age<20){
    console.log("Situation Satisfied");
}else{
    console.log("Not satisfied");
}

// Q-2 - Demonstrate the use of Switch case statement in javascript?
// const prompt= require("prompt-sync")();
let umar= prompt("Enter umar:");
umar=Number.parseInt(umar);
switch (umar){
    case 10 :
        console.log("you are a child , dont even think to jerk ");
        break;
        case 18 :
        console.log("you are not adult, wait for 18  ");
        break;
        case 24 :
        console.log("you are an adult, now bang the girl.. ");
        break;
        case 30 :
        console.log("Must get marry. have wife fuck her day and night..");
        break;
        case 40 :
        console.log("Have a child from the beautiful pussy..");
        break;
        default:console.log("Enter valid umar ");
}

// Q-3 - Write a program is divible by 2 and 3?

let num= prompt("Enter num:");
num=Number.parseInt(num);

if (num%2==0 && num%3==0){
    console.log("Number is divisible by both 2 and 3");
}else{
    console.log("Number is not divisible by both 2 and 3");
}

// Q-3 - Write a program is divible by either  2 or 3?

let digit= prompt("Enter digit:");
digit=Number.parseInt(digit);
if (digit%2==0 || digit%3==0){
    console.log("Number is divisible by eihter by 2 or 3 or by both");
}else{
    console.log("Number is not divisible by both 2 and 3");
}


// print "you can drive " and "you cannot drive " based on age being greater than 18 using ternanry operator

let ternary= prompt("Enter digit:");
ternary=Number.parseInt(ternary);

console.log("you can", ternary<18? "not drive" : "drive")