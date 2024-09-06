const prompt=require("prompt-sync")();
let a = prompt("Whats is your age??")
a=Number.parseInt(a)//coverting strinf into number

// if is true then it will run otherwise it is not 
if (a>18){
    console.log("ur age is valid")
}
// it works when if does not satisfy it condition
else{
    console.log("invalid age")
}
