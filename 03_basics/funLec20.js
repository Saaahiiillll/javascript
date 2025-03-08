function calculateCartPrice(num1){
   return  num1 
}
console.log(calculateCartPrice(2)) //2
console.log(calculateCartPrice(200,400,500)) //200

function calculateCartPrice1(...num1){
    return  num1 
 }
 
 console.log(calculateCartPrice1(200,400,500))
 //[200, 400, 500]

 function calculateCartPrice2(val1,val2, ...num1){
    return  num1 
 }
 
 console.log(calculateCartPrice2(200,400,500,2000))
 //[500,2000]

 const user = {
    username : "hitesh",
    price: 199
 }

 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price 
        is ${anyobject.prices}`)
 }

//handleObject(user)... Username is hitesh and price is 199

handleObject({              // direct passing object 
    username: "sam",
    price : 399
})
// Username is hitesh and price is 399

//now passing array

const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
//400