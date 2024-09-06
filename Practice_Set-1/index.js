//chapter-1 
// Q-1  create a variable of type string and try to add a number to it.
let a = "harsh";
let b = 6;
let c = (a+b);
console.log(c)

// if we add any number with string then it will attach with it .

// Q-2 using typeof operator to find out the type of datatype present in it.
console.log(typeof c)

// Q-3 Create a const object in javascript Can you change it to hold a number later.
const people = {
    jai : "forever",
    pranjal : "best"
}
// no we cannot change const variable later .

// Q-4 Try to add a new key to the const object in Q-3 were able to do it.
people['friend']="RT"
people['jai']="love"
console.log(people)

// yes we change it by adding new key ... because we use people as reference on my const . and others are value of my const


// Q-5 Write a js program to create a word-meaning dictionary of 5 words .
const dictionary={
    animal: "an creature who does not have logical thinking.",
    human: "the intelligent presence on this planet" ,
    Mother: "A women who gives birth to a child",
    unpleasent: "Harsh,not good",
    sperm: "a liquid which help to make women pregnent"
}
console.log(dictionary.Mother)

