// String is collection of character
// String is used to store and manipulate text.

let name = "harry";
console.log(name.length);//name.length gives the length of the String.

//String can made also using single quote'  '.
let naam = 'harsh';
console.log(naam);
//to access the string;
console.log(naam[0]);// it gives the first character of the string.


// template literals 
// it use backtics instead of quotes to define a string.
let me = "Harsh";
let you = "Jai";
let friend =`${you} is best friend of ${me}`;
// we can directly insert the variable in template literals. It is known as string interpalation.
console.log(friend);


//Escape Sequence Characters
let fruits ="mango\"s";
console.log(fruits.length);