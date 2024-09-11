// to find length of the String
let name = "Harsh";
console.log(name.length);

// to covert it into Uppercase
let naam = "Vardhan";
console.log(naam.toUpperCase());
console.log(naam.toLowerCase());// convert in lowercase.

// slice method - use to make peices of the string
console.log(naam.slice(2,6));// in this 6 character will not include/print.
console.log(naam.slice(3));// from 3rd to last whole string will print.

// Replace . - it is used to replace the string from another string.
let friend="   Jai Bhai   ";
let newfriend=friend.replace("Bhai","Bhau");
console.log(newfriend);

// Concat - to add a new string in a string.
console.log(name.concat(" is a friend of ",friend," ok"));

// trim -- it is use to trim the string space.
console.log(friend.trim())

//Strings are immutable 
let fr ="vardhan";
for (let i=1;i<=fr.length;i++){
    console.log(i);
    for(let a of "vardhan"){
        console.log(fr);
    }
}