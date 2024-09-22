//Filter create an new array didn't modify the previous array.
let arr=[12,34,53,2,99,84,45,78,65,32,25];
/*----*/let a=arr.filter((a)=>{
    return a<50;
})
console.log(a);