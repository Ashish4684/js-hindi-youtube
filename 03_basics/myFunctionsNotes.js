// FUNCTION AND SCOPE

function sayMyName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");

}

sayMyName()

function addTwoNos( num1 , num2){
    let num3 = num1+num2
    console.log(num1+num2);

}

addTwoNos(6,7)



let a ="ashish";
function check(){
    return ` my name is ${a}`
}

let b = check()
console.log(b);

function my(...num){
    console.log(num);
}
my(2,2,3,5,5,)


