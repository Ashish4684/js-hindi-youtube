// ********************************OBJECT*******************************

// SIMILAR TO THE DICTIONARY IN PYTHON
// KEY VALUE PAIR

// DEFINATION
const myObj = {
    asish : "Ashish",
    ydv : " yadav"
}


// how to access the element of the object
console.log(myObj.asish)
// and
console.log(myObj["ydv"]);


// use a symbol in the object

const sym = Symbol()

let obj = {
    myName : "ashish"
    // [sym] : "this is a symbol"
};


// console.log(obj.[sym]);
let obj1 = {...obj, ...myObj}
console.log(obj1);