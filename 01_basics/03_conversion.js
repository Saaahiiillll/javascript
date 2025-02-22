let score = "33abc"

console.log(typeof score) // string
console.log(typeof (score)) //string 

let valueInNumber = Number(score) 
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN

let value = null
let valInNo = Number(value)
console.log(valInNo ) //0

// "33"=> 33
//"33abc"=> NaN
// true =>1; false => 0;
// undefined => NaN

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn); //true

//" " => false   empty string
//"Hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);  //33
console.log(typeof stringNumber);  // string