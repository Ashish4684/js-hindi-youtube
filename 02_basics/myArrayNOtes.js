// *********************************************ARRAY IN JAVASCRIPT ************************

// enable storing a collection of multiple items under a single variable

//  defination 

// let arr = [2 , 3, 4,  4, 5, null , undefined]

// In javascript arrays are resizable and can store  a mix of datatype as show above

// acessed using indexes

// javascript array creat shallow copies

let arr = [ 2,3,4,5,56,7.7 ]

console.log(arr);

arr.push(23.69)
console.log(arr);
arr.pop()
console.log(arr);

// arr.unshift(9)
arr.shift()
console.log(arr);

console.log(arr.includes(3));

// ****************************splice slice *********************************


let aarr =  [ 6,4,5,6,7,8,9,9,9,9]
// simply give  the element in the specified range 
console.log(aarr.slice(2,7));

console.log(aarr);
let a = aarr.splice(3,5)
// splice store element in the range to the given variable and remove them from the original arr
console.log(a);
console.log(aarr);

// ******************SPREAD OPERATOR**************************************

let ar1 = [...arr ,...aarr]
console.log(ar1);
// spread all the element in the arrays and stores in thhe given varible
