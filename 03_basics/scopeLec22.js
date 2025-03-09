 function One(){
    const username = "Hitesh"
    function two(){
        const website ="youtube"
        console.log(username) //hitesh
    }
    //console.log(website) give error bcz it is out of scope

    two()
 }

 //One()

if(true){
    const username = "hitesh"
    if(usernmae === "hitesh"){
        const website = " youtube"
        console.log(username + youtube)  //hitesh youtube
    }
    // console.log(website) it gives error
} 
// console.log(username) it gives error

// ++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5)) //6
function addone(num){
    return num +1
}

addTwo(5)  // it give error.. Cannot access 'addTwo' before instialization
const addTwo = function(num){
    return num+2
}
    