const accountId = 1445553
let accountEmail = "ashish@gmail.com"
var accountPasword = "12029"
accountCity = "jaipur"
let accountState;

// accountId = 2  // not allowed
accountPasword = "12345"
accountEmail ="ddfdg@jsiu.com"
accountCity = "jashpur"
  
console.table([ accountEmail, accountId, accountPasword, accountCity , accountState])
console.log(accountId);
/*
prefer not to use var 
because of issue in block scope and functional scope
*/