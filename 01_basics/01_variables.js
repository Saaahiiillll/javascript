const accountId =144553
let accountEmail = "sahilthakur@google.com"
var  accountPassword ="1234"
accountCity = "jaipur"

//accountId =2 // changing not allowed(once declared)
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

let accountState

console.log(accountId);
/*
Pefer not to use var
because of issue in block soce and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,
    accountState
])
