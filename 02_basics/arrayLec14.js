// Array

//const myArr=[0,2,3,4,5,true,"hitesh"] it is also valid (mix of data type)
// js array is resizable

const myArr=[0,2,3,4,5] //zero based indexing 
const myHeros = ["shaktiman","ironman"]

const myArr2 =  new Array(1,2,3,4,)
console.log(myArr[1]) //accesing value

// Array Methods

myArr.push(6) // it add new value to array
myArr.push(7)
myArr.pop()

myArr.unshift(9) // it add value in 
// begning of the array and shift the pre value
// o/p -> [9,0,2,3,4,5]
myArr.shift()
// it remove the value from begning of the array
// o/p -> [0,2,3,4,5]

console.log(myArr.include(9))
// it tell 9 is included or not? ->false
console.log(myArr.indexOf(9)) // o/p -> -1 
// it mean 9 is not present 
// if value exist then it return the INDEX
console.log(myArr)

const newArr = myArr.join()
console.log(newArr) // 0,2,3,4,5
console.log(typeOf(newArr)) //string

// slice , splice

console.log("A", myArr); // A [0,2,3,4,5]

const myn1 = myArr.slice(1,3)

console.log(myn1) // [2,3]
console.log("B",myArr); // B[0,2,3,4,5]

const myn2 = myArr.splice(1,3)
console.log("B",myArr); // C[0,5]  here splice remove 1 to 3 indices
//  element from original array
console.log(myn2) //[2,3,4]
// splice remove the ele from the pre array




