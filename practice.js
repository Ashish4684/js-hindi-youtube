let myObj = {
    "as" : "ashish",
    ku : "kumar",
    yd : "yadav"

}

// console.log(myObj.as);
// myObj.as = "Ashish"
// console.log(myObj.as);
// console.log(myObj["as"]);

let greeting = new function(){
   let greet = "hello"
   return greet
}
// console.log(greeting);
 function printName(name) {
    console.log(`my name is ${name}`);
}
let as = "ashish"
// printName(as)


function addTwoNos(a1, a2){
    return a1+a2
}

let a = addTwoNos(12, 3)
console.log(a);


function adds(...price){
    return price
}

let abc = adds(2,3,44,5,6,7,88,9,9,0,)
// console.log(abc);
// let b = 0
// abc.forEach((element) => {
//      b = element+b
//     console.log(b);
//     return b;
// });


// const addtwo = (num1 , num2)=> (num1+num2)

// console.log(addtwo(3 , 4));

// co


(()=>{console.log("ashish");})();