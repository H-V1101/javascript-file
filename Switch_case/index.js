const prompt = require("prompt-sync")();
let day = prompt("enter week day:");
day=Number.parseInt(day);
switch (day){
    case 1: console.log("today is Monday");
    break;
    case 2: console.log("today is Tuesday");
    break;
    case 3: console.log("today is Wednesday");
    break;
    case 4: console.log("today is Thursday");
    break;
    case 5: console.log("today is friday");
    break;
    case 6: console.log("today is Saturday");
    break;
    case 7: console.log("today is Sunday");
    break;
    default:console.log("Enter vaild week day");
}