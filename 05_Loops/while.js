const prompt=require("prompt-sync")();

//while loop
let n=prompt("enter value of n :");


n=Number.parseInt(n);

let i=0;
while(i<n){
    console.log(i);
    i++;
}


// Do while loop.
// it will run atleast 1 time
let num =prompt("enter digit of num");
let b =10;
do{
    console.log(b);
    b++;
}
while(b<num);
