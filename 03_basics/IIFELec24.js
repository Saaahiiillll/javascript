// Immediately Invoked Function Expression
function chai(){
    console.log(`DB CONNECTED`)
} 
chai() //DB CONNECTION

(function chai(){
    // named IIFE  
    console.log(`DB CONNECTED`)
})();  // DB CONNECTED    semi-colon is compulsory

(function aurcode() {
    console.log(`DB CONNECTION TWO`)
}) (); // DB CONNECTED TWO

(()=>{
    console.log(`DB CONNECTED TWO `);
})();   // DB CONNECTED TWO

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})( 'hitesh');   // DB CONNECTED TWO hitesh