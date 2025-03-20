// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// basic syntax of switch key

const month = 3;
switch(month){
    case 1: 
        console.log("january");
        break;
    case 2:
        console.log("february")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;
    default:
        console.log("default case match");
        
        break;
}
// o/p  march
// if break keyword is not used in a case then all case execute 
// below this case 

const key = march;
switch(month){
    case "jan": 
        console.log("january");
        break;
    case "feb":
        console.log("february")
        break;
    case "march":
        console.log("march")
        break;
    case "april":
        console.log("april")
        break;
    default:
        console.log("default case match");
        
        break;
}