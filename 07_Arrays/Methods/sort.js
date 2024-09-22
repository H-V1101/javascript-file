//sorting for an accending using compare 

const compare = (a,b)=>{
    return a-b;
}
let arr=[22,34,56,54,34,12,11,1111];
arr.sort(compare);
//reverse -- it is use to reverse the array 
arr.reverse();
console.log(arr);