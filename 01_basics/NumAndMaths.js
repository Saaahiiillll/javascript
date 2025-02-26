const score = 400;
console.log(score) // 400

const balance = new Number(100)
console.log(balance); //Number:100


console.log(balance.toString()) // 100 This is string Type

console.log(balance.toString().length) //3 

console.log(balance.toFixed()) //100.00 
console.log(balance.toFixed(1)) //100.0

const otherNo = 23.8966

console.log(otherNo.toPrecision(3)); //23.9

const otherNum =123.8966
console.log(otherNum.toPrecision(3)) // 124
console.log(otherNum.toPrecision(4)) //123.9

const otherNumber =1123.8966
console.log(otherNumber.toPrecision(3)) // 1.12e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString()) //1,000,000
console.log(hundreds.toLocaleString('en-IN')) //10,00,000

//++++++++++++++++++++++++++ Maths ++++++++++++++

console.log(Math) //Object [Math] {}
console.log(Math.abs(-4)) // 4
console.log(Math.round(4.3)) //4
console.log(Math.round(4.6)) //5
console.log(Math.ceil(4.3)) //5
console.log(Math.floor(4.9))//4


console.log(Math.min(4,3,6,8))//3
console.log(Math.max(4,3,6,8))//8

console.log(Math.random()) 
//it give some random value  b/w 0&1 eg 0.52794.....
console.log((Math.random()*10)+1) //3.4566089....
//it give value b/w 1 to 9

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max -min +1))+min) 
//value will be b/w 11 to 19








