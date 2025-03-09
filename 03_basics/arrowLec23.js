//this and arrow function
const user ={   //object
    username : "hitesh",
    price : 999,

    welcomeMessage: function(){   //method
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()  // hitesh, welcome to website
user.username ="sam"
user.welcomeMessage()  // sam, welcome to website 

//  hitesh, welcome to website  ....   printed by line no 12
//    {                  .....  printed by line 8
//       username: 'hitesh',
//       price: 999,
//       welcomeMessage : [Function:welcomeMessage]
//   }
//   sam, welcome to website  .....printed by line 14
//   {               ...........  printed by line 8
//    username : 'sam',
//    price : 999,
//    welcomeMessage : [Function: welcomeMessage]
//   } 

console.log(this)  //  {}  empty object
// only this  keyword print current context  

function chai(){
    let username = "hitesh"
    console.log(this.username) //undefined  
} 
chai()

const chai = function(){
    let username ="hitesh"
    console.log(this.username)  //undefined
}
chai()

const chai = () => {
    let username = "hitesh"
    console.log(this.username) //undefined
    console.log(this)  //{}
}

const addTwo = (num1, num2) => {
    return  num1+num2
}
console.log(addTwo(3,4)) //7

const addTwo1 = (num1, num2) =>  num1+num2
console.log(addTwo1(3,4)) //7

const addTwo2 = (num1, num2) => (num1+num2)
console.log(addTwo2(3,4)) //7

  