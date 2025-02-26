// Date lec 13

let myDate = new Date()
console.log(myDate)
 //it give current date and time 
 console.log(myDate.toString())
 //it give day,time and date like->
 //  Wed Mar 01 2023 12:03:41
console.log(myDate.toDateString()) // wed mar 01 2023
console.log(myDate.toLocaleString()) // 3/1/2023 12:04;46 pm

console.log(typeof myDate) //object

let myCreatedDate = new Date( 2023, 0, 23)
console.log(myCreatedDate.toDateString()) // Mon Jan 23 

let myCreateDate = new Date( "2023-00-14")
console.log(myCreatedDate.toDateString()) // invalid date

let myNewDate = new Date( "2023-01-14")
console.log(myCreatedDate.toDateString()) // 1/14/2023, 12:00:00 AM

//let myNewDate = new Date( "01-14-2023")

let myTimeStamp = Date.now()// it give excat today date
console.log(myTimeStamp) // it give milisec value 
console.log(myCreatedDate.getTime()) // it give milisec value from decleared date

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()) 
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long",
    
})