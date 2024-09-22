//simple for loop
let num =[3,5,89,87,90];
for (i=0;i<num.length;i++){
    console.log(num[i]);
}

// forEach loop
num.forEach(element => {
    console.log(element*element)
    
});

//Array.From --- it is used to form an array from an object.
let name="Harsh";
let arr = Array.from(name);
console.log(arr);

//for...of loop----
for(let i of num){
    console.log(i);
}

//for...in loop---- it is used to print the key of an object in array.
for(let i in num){
    console.log(i);
}
