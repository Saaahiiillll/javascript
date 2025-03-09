// let a =10
// const b=20
// var c= 30
// console.log(a);  //10
// console.log(b);  //20
// console.log(c); //3

// {} ->  decide scope


if(true){
    let a =10
    const b=20
    var c= 30
}

console.log(a);  //  a is not defined
console.log(b);  // b is not defined
console.log(c); //30  due to this we avoide var in js,
//  scope lie over the code

let a=300
if(true){
    let a =10
    const b=20
    console.log(a)  //10
}

console.log(a); //300

for(let i=0;i<array.length;i++){
    const element =array[i];
}