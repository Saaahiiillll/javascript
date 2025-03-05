const tiderUser = new Object()
// const tinderUser={}  
// this also declare empty object
console.log(tinderUser);

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);  
// {id:'123abc',name:'sammy',isLoggedIn:'false'}

const regularUser ={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname)
// {userfullname:{firstnmae:'hitesh',lastname:'choudhary'}}
console.log(regularUser.fullname.userfullname.firstname)
// hitesh

const obj1 = {1:'a',2:"b"}
const obj2 = {3:'a',4:"b"}

const obj3 = {obj1, obj2}
console.log(obj3);
//{obj1:{1:'a',2:"b"},obj2 = {3:'a',4:"b"}}
const obj4= Object.assign({},obj1,obj2)
//const obj4=Object.assign(...obj1,...obj2) this is same as
//above object
console.log(obj4);
//{1:'a',2:"b",3:'a',4:"b"}
const obj5= Object.assign( obj1,obj2)
console.log(obj5)
//{1:'a',2:"b",3:'a',4:"b"}

const user=[
    {
        id:1,
        eamil:"h@gmail.com"
    }
    ,
    {
        id:2,
        eamil:"h@gmail.com"
    }
    ,
    {
        id:3,
        eamil:"h@gmail.com"
    }
]
user[1].email
console.log(tinderUser)
//{id:'123abc',name:'sammy',isLoggedIn:'false'}
console.log(Object.keys(tinderUser))
//['id','name','loggedIn']
console.log(Object.values(tinderUser))
//['123abc','Sammy',false]
console.log(Object.entries(tinderUser))
//[['id','123abc'],['name','Sammy'],[''isLoggedIn',false]]
console.log(tinderUser.hasOwnProperity('isLoggedIn'))
// True ....this tell" is this property exist?".



