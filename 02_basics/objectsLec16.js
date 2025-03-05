// singleton
//   Object.create..... this also create object

// boject literal

const mySym = Symbol("key1")

const JsUser ={
    name:"Hitesh",
    "fullname":"Hitesh Choudhary",
    //mySym :"mykey1",
    [mySym] :"mykey1",
    age :18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn:false,
    lastLoginDay : ["Monday","sunday"]

}   //this is object 

console.log(JsUser.email) //hitesh@google.com
console.log(JsUser["email"]) //hitesh@google.com
console.log(JsUser["fullname"]) // Hitesh Choudhary
// full name can't accessed like -> JsUser.full name

// mySym :"mykey1" when the decleration is that inside the object  type then data
// is string but when we decleared as [mySym] :"mykey1"
// // then the data type is Symbol
// it is only can be accessed from object by using square bracket
console.log(JsUser.mySym)  // o/p -> myKey1 their data type is not symbol

console.log(typeof JsUser.mySym)  //string
console.log(JsUser["mySym"]) 

JsUser.email = "hitesh@chatgpt.com"
// this will overwrite the value
Object.freeze(JsUser)
// this will ock the value.....not changable

JsUser.greeting =function(){
    console.log('hello JsUser') // [Function (anonymous)]
}
JsUser.greetingTwo =function(){
    console.log(`hello JsUser, ${this.name}`) // [Function (anonymous)]
}
console.log(JsUser.greeting())    //hello JsUser
console.log(JsUser.greetingTwo())//hello JsUser, Hitesh

