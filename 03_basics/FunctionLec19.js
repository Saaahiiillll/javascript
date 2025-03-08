function sayMyName(){
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");    

}

sayMyName()  //execution

function addTwoNumber(number1, number2){
   console.log( number1+number2);
   
}
addTwoNumber()//NaN
addTwoNumber(3,4) //7
addTwoNumber(3,"4") //34
addTwoNumber(3,"a") //3a
addTwoNumber(3,null) //3

const result = addTwoNumber(3,4) //7
console.log(result) //undefined

function addTwoNumber(number1, number2){
    let result =number1+number2
    return result
    //return number1+number2
 }
 console.log("Result :", result) 

 function loginUserMessage(username="sam"){
    if(username === undefined){
        console.log("Please enter a username")
          
    }
    return `${username} just logged in`
 }

 console.log(loginUserMessage("hitesh"))
 //hitesh just logged in , now if condition will not run
 //if we doesn't pass any value then it will print......sam just logged in
 