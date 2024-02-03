// ***********************************if statements**********************************
let abs = 11
if(abs <= 10 )
{
    console.log("abs is less than or equal to 10");

}
else if( abs >= 10)
{
    console.log("abs is greater than or equal to 10");


}
else{
    console.log("unknown");
}


// ****************PROBLEM WITH VAR ********************************
// IT DO NOT HAVE A SENSE OF SCOPE THE VAL CAN BE ACCESSED OUTSIDEOF THE SCOPE WHICH IS A PROBLEM

if(true ){
  var as = 123
  console.log(as);
  
}


console.log(as);
// access outside if statement


// ********************another way to creat scope without {}***********************

if(true) console.log("TRUE"),console.log("and true");

// ******************NEST IF STATEMENT*********************************************


// ******************************&& ||********************************************
let isloggedIn = true
let debitCard = true 
let loggedGoogle = true

if(isloggedIn && debitCard && loggedGoogle)
{
    console.log(" may be online");

}
if(isloggedIn || debitCard || loggedGoogle)
{
    console.log(" is online");

}
