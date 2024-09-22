// Reduce Method -- reduces an array to a single value.
let arr = [5,10,15,20,25,30];
const reducearr=(h1,h2)=>{
    return h1+h2;
}
let newarr2 = arr.reduce(reducearr);
console.log(newarr2);