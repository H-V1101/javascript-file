// the are 7 types of primitive datatypes
// N N S S B B U
// null,number,Symbol,string,boolian,bigint,undefined

// Object - these are the combination of key-value pair/
// and object is an non-primitive datatype in javascript/

// Primitive in js
let a = null;
let b = 365;
let c = "harsh";
let d = Symbol("this ia an symbol")
let e = true ;// can be a false
let f = BigInt(567)+BigInt(93);
let g = undefined;
console.log(a,b,c,d,e,f,g);
// we can also a type of an variable 
console.log(typeof f)

//object in js
// they are non primitive datatypes 

const item = {
    "Harsh" : 69,
    "Babli" : undefined,
    "Tushar":  null,
    "Abhishek" : true
}
console.log(item["Abhishek"])

//use of object - make key-value pair so we look after it like use in making class and name  , item-pricing , student marking etc.

