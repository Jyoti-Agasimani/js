const accountId = 144553
let accountEmail = "jyotiagasimani0@gmail.com"
var accountPassword = "12345"
accountCity = "Karnataka"
let accuntState;

// accountId = 2 // not allowed

accountEmail = "ja@ja.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

//  console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accuntState])