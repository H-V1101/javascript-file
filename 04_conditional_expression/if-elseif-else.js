const prompt=require("prompt-sync")();
let age = prompt("whats is your age?");
// age=Number.parseInt(age);
if(age<14){
    console.log("you are an teenager");
}else if(age<18){
    console.log("you cannot cast a vote");
}else
{
    console.log("you are adult have sex now");
}
//ternary operator
console.log("you can" ,age<18? "not drive" : "drive");