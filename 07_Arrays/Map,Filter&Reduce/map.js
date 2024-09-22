// difference between foreach and map
// we use map when we want to make new array 
// we use for each when we want to do an operation on existing element of an array.

// MAP
let arr = [23,45,32,56];
let a = arr.map((value,index,array)=>{
    console.log(value,index,array);
    return value + 8;
})
console.log(a)