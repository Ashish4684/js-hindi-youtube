let userEmail = "asc@dfdf.ai" //check for "" , [] empty string and array

if(userEmail){
    console.log("got the mail");
}else{
    console.log("dont have the mail");
}


// ********** if check Boolean but in above case there  is no Boolean but still code executes******
// Why?  due to concept of truth and falsy value

/*
FALSY
***************************
false , 0 , -0, 0n,NaN,null,undefined,""

**************************
TRUTHY
anything else is truthy value

"0","false"," ".,{},[],function(){}
*****************************************************
all of the below are true
*false == 0
*false == ''
*'' == 0
*/


// nullish cola0sing  operator  (??); null and undefined

let val ;
val = 5??10





console.log(val);

// trinay operator

// condition ? true:false

2>3?console.log("2 is greator"):console.log("2 is smaller");