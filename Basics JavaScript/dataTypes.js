/**
 * In JS we have 8 data types:
 * number

 /**
 * The number type represents both integers and floating-point numbers.*
 * There is many operations what we can do with numbers *,/,**,% ...
 * In addition to regular numbers,
 * there are so-called 'special numeric values' that also relate to this data type: Infinity, -Infinity, and NaN."
 */
let n = 123;
n = 12.345;
console.log(1 / 0); //Infinity
console.log(Infinity); //Infinity

/**
 * “NaN (Not a Number) represents a calculation error.
 * This is the result of an incorrect or undefined mathematical operation
 * All operations with NaN return NaN
 */

console.log("not a number" / 2); //NaN
console.log(NaN + 1); //NaN
console.log(3 * NaN); //NaN
console.log("not a number" / 2 - 1); //NaN
console.log(NaN ** 0) //Only in this case NaN return number 1

