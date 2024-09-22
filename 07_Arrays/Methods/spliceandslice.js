// splice -- it is use to add and remove the items of an array .
let num = [12,2,4,5,85,24,13];
let removevalues= num.splice(4,2,222,567,900);
console.log(num);
console.log(removevalues);

// slice -- it is used to remove a piece from an array and make an array
// it doesnot modifies new array it creates an array.

let sli=[1,2,3,4,5,6,7,8,9];
let newnum=sli.slice(3,7);
console.log(newnum);