//primitive datatype

//  7 Type : String, Number, Boolean , Null, Undefined
//             ,  symbol , BigInt 


const score = 100
const scoreValue = 100.3
const isLoggedIn =false
const outsideTemp = null
let userEmail;
const id =Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false
const bigNumber =  58546526188n

console.log(typeof outsideTemp) //object
console.log(typeof bigNumber) //bigint 
console.log(typeof scoreValue) //number



// Reference (Non Premitive)

// Array,Object,Function

const heros = [ "shaktiman", " naagraj", "doga"] ; // array

let ymObj ={
    name: "Sahil ",
    age : 23
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction) // function datatype
console.log(typeof heros) // object
console.log(typeof anotherId) // Symbol



//+++++++++++  video10   +++++++++++ Memories(Stack and Heap) 
// Stack(Primitive) , Heap (Non-Primtive)

let myYoutubeName ="sahilthakurdotcom"
let anothername = myYoutubeName;

console.log(anothername); //sahilthakurdotcom


// let myYoutubeName ="sahilthakurdotcom"
// let anothername = myYoutubeName;
// anothername = "chaiaurcode"
// console.log(anothername); //chaiaurcode

let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne

userTwo.email ="sahil@google.com"
console.log(userOne.email) //sahil@google.com
console.log(userOTwo.email) //sahil@google.com



