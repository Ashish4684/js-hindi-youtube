// *****************DATA TYPES*********************************
/*  //  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
*/

// TWO TYPE OF DATATYPE CALLED *PRIMITIVE *  AND *NON PRIMITIVE* 

// DIVIDE ON THE BASIS OF HOW DATA IS STORED AND HOW WE ACCESS THE DATA

// 7 PRIMITIVE DATA  / CALL BY VALUE

/*
*STRING
* NUMBER 
*BOOLEAN 
*null
*UNDEFINED
*BIGINT
*SYMBOL
**/


// NON PRIMITIVE / CALL BY REFERENCE / 3 TYPE 
/*
*ARRAY
* FUNCTIONS
* OBJECTS
*/

const n = 389789
const m = 667777
console.log(typeof n );
console.log(typeof m );
const isLoggedIn = true;
console.log(typeof isLoggedIn);
const nm = undefined
console.log(typeof nm);


const my = [ "dgfu" , "dg i u" , "o uhgi8u"]
console.log(my[2]);

const myobject = {
    1 : "ashish",
    2 : "]dfjio"
}
console.log(myobject[1]);

/*const myFunction = function names(para) {
    console.log(para);
    
}
let para = 2
names(para)*/


// *****************************NUMBER*****************************


//************* */ ARRAY  OBJECT AND FUNCTION **************************** */

 const arr = [1,2,2,3,3,3,4,4,4,4]
 console.log(arr[2]);

 let myOb = {
    ashish : "ashish yadav"
 }

 console.log(myOb.ashish);

 myOb.isis = function()
{
    console.log("ashish");
} 

console.log(myOb.isis());
