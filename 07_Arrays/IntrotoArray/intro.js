// Arrays are collections of some items(string,number,object,boolean).
 
let a=[1,2,3,4,null,"not attended"];
console.log(a);

//why we use array??
//arrays are use to store more than one values .
// we can use more than one type of values .

// We can access an individual value of object present in array  like...

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);// it is undefined coz value of index 6 is not defined

// to check the length of the array
console.log("length of the my array is "+ a.length);

// adding the new value to an array.
a[6]=88;
console.log(a);

// change the value of an array.
a[0]=99;
console.log(a);

// Arrays are mutable arrays can be change .

