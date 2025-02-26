const name ="Sahil"
const repoCount =50

console.log(name+repoCount+"Value");//Sahil50Value

console.log(`hello my name is ${name} and my repo 
    count is ${repoCount}`)//`hello my name is Sahil and my repo count is 50
   

const gameName = new String('sahil-sa')  //also string decleration  

console.log(gameName[0]);//h
console.log(gameName.__proto__);//{}

console.log(gameName.length);//5
console.log(gameName.toUpperCase());//SAHIL
console.log(gameName.charAt(2));//H
console.log(gameName.indexOf('h'));//2

const newString = gameName.substring(0,3)
console.log(newString);//sah

const anotherString = gameName.slice(-8,2)
console.log(anotherString);//sa 

const newStringone ="   Hitesh   "
console.log(newStringone)//   Hitesh 
console.log(newStringone.trim());//.trim remove the begining space and ending space 

const url ="https://hitesh.com/hitesh%20chodhary"
console.log(url.replace('%20','-'))
// replacing %20 by - and the o/p will be 
// https://hitesh.com/hitesh-chodhary

console.log(url.includes('sundar'))
//it return true and false detect the sub string is present or not

console.log(gameName.split('-'));
// o/p will be ['sahil'-'sa']
