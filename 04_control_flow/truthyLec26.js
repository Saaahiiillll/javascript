const userEmail = "h@hitesh.ai"
if(userEmail){
    console.log("got user email")
}else{
    console.log("don't have user email");
}
// o/p got have user email 

// empty array is assume as true and empty
//  string is taken false
/**************************** */
// falsy values

// false, 0, -0, BigInt 0n , "" (empty string), null, undefined , NaN

// truthy values
//  "0" inside string 0 is truthy value
// 'false', " " , {}, [], function(){}  these are thuthy value
const user1Email = []
if(user1Email.length === 0){
   console.log("Array is empty");
    
}
//Array is empty
const emptyObj ={}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//true statement (comparison)
// false ==0 -> true
// false == ''  -> true
// 0 == ''  -> true

// Nullish coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);
// o/p 5
let val2;
val2 = null ?? 10
console.log(val2);
//o/p 10  
// Null coalescing operator perform safety check for Null or undefined value 

let val3;
val2 = undefined ?? 15
console.log(val3);
// o/p 15

// terniary Operator

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

// o/p more than 80
//if the statement is true then first operation perform , if false 
// second statement is performed  




