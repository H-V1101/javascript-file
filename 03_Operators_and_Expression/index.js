// A fraction of code which produce value is known as Expression

// Operators in js
console.log("Operators in js")
let a=45;
let b = 5;
//Arithimetic Operators
console.log("a + b =" , a+b); // addition operators 
console.log("a - b =" , a-b); // substraction operators
console.log("a / b =" , a/b); // divide operators
console.log("a * b =" , a*b); // multiplication operators
console.log("a ** b =" , a**b); //exponentiation operators -- is like power on the vaalue in this case 45 to the power of 5. 45*45*45*45*45
console.log("a % b =" , a%b); // Modulus - it shows the remainder
console.log("a++ =" , a++); //increament -- in a++ - it first print the value then increament it for next value
console.log("++a =" , ++a);//increament -- ++a - it first increament the value then print it 
console.log("a-- =" , a--);// decrament same as increment 
console.log("--a =" , --a);
console.log("a-- =", a--);
console.log("a =" , a);

// Assignment Operators
let x=2;// equal to operator
let y =1;
 
x += 5; // x = x+5
console.log(x)
x -= 4; // x = x-7
console.log(x)
x *= 2;// x = x*2
console.log(x)
x /= 2;// x = x/2
console.log(x)
x **= 2;// x = x^2
console.log(x)
x %= 2;// x = x%2
console.log(x)

// Comparison Operators
let comp1 = 5;
let comp2 = 6;
console.log("comp1 == comp2 is" ,comp1==comp2);//Equal to operator
console.log("comp1 != comp2 is" ,comp1!=comp2);//Not Equal to operator
console.log("comp1 === comp2 is" ,comp1===comp2);// it check value and type of the value
console.log("comp1 !== comp2 is" ,comp1!==comp2);// it checks value and type of the value
console.log("comp1 < comp2 is", comp1<comp2);// less than
console.log("comp1 > comp2 is" ,comp1>comp2);// greater than 
console.log("comp1 <= comp2 is" ,comp1<=comp2);// less than equal to
console.log("comp1 >= comp2 is" ,comp1>=comp2);// greator than equal to
// console.log("comp1 ? comp2 is", comp1?comp2 ) ;//ternary operator

// Logical operators
let logi1 = 6;
let logi2 = 7;
console.log(logi1<logi2 && logi1==6);// if both true then true 
console.log(logi1>logi2 || logi1==6);// if anyone is true then true 
 console.log(!false); //reverse the result like true ko false kardega  
