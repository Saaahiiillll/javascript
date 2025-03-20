const isUserLoggedIn = true;
const temperature = 41;

if(temperature < 50){
    console.log("less than 50");
}
// o/p less than 50
if(temperature === 41){
    console.log("less than 50");
}else{
    console.log("temperature is greater than 50")
}
// o/p less than 50
if( 2 =='2'){
    console.log("executed");
}
// o/p executed

// === tripal equal symbol strictly check the data type 

if( 2 ==='2'){
    console.log("executed");
}


const score = 200
if(score>100){
    const power = "fly"
    var efficiency = "fly" // scope is not valid in var
    console.log(`User power: ${power}`)
}
// o/p User power: fly
console.log(`User power: ${power}`)
// o/p power is not defined 
console.log(`User efficiency: ${efficiency}`)
// o/p User efficiency: fly


const balance = 1000

if (balance > 500) console.log("test"),console.log("test 2");
// this is not good way to write the code

if(balance>500){
    console.log("less than 500");  
}else if(balance < 750){
    console.log("less than 750");
}else if(balance <900){
    console.log("less than 750");
}else{
    console.log("less than 1200");
}
// less than 1200
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard && 2==2){
    console.log("allow to buy course");
}
// allow to buy course

if(loggedInFromGoogle || loggedInFromEmail){ 
    console.log("user logged in");
}