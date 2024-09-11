// Q-1 -- What is the following print in javascripy?
// ----console.log("har\"".length);?/
let name="har\"";
console.log(name.length);

// Q-2 --Explore the includes ,Startwith and end with function of a string.


// INCLUDES
let sen= "In nearest future there will a richest man on earth will be harsh";
let word= "harsh";
console.log(`Harsh have a wife name "${word}"${sen.includes(word)? ' vanshika' : 'not married' } in his life`);


// STARTWITH
let pyaar = "Vanshika ki vagina";
console.log(pyaar.startsWith("Vanshika",0));

// Endwith
console.log(pyaar.endsWith("vagina",18));

// Write a program to convert a given string to lowercase.
console.log(pyaar.toLowerCase());

// Extract the amount out of this shting.
//please give Rs 1000

let money = "please give Rs 1000";
let amount = Number.parseInt(money.slice(15));
console.log(amount);
console.log(typeof amount);