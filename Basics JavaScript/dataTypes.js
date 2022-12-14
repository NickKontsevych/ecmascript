/**
 * In JS we have 8 data types:
 * number
 * string
 * object
 * boolean
 * bigint

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

/**
 * BigInt user for very huge numbers. This is cary rare type
 * We should always add n in the end of value
 * const bigInt = 1234567890123456789012345678901234567890n;
 */
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); //1234567890123456789012345678901234567890n;

/**
 * String
 * A string in JavaScript must be enclosed in quotation marks.
 * let str = "Paste Text";
 * let str2 = 'Single quotes are also allowed';
 * let phrase = `with these quotes you can ${str}`;
 */
let str = "Hello";
let str2 = 'Single quotes are also allowed';
let phrase = `With these quotes you can ${str}`;
console.log(phrase);//With these quotes you can Paste Text

/**
 * Boolean
 * This logical type works only with two value: true and false
 * The boolean can be get as result of compare
 */
let nameFiledChecked = true; // Yes, name was checked
let ageFieldChecked = false; // No, the age field was not checked
let isGreater = 4 > 1;
console.log(isGreater); // true

/**
 * The "null"
 * This is just a special value that represents 'none', 'empty' or 'unknown value'.
 */
let age = null;
console.log(age);

/**
 * The "undefined"
 * This is special value that represents that the value was not assigned
 */
let empty;
console.log(empty); //undefined

/**
 * typeof
 * This operator return type of argument
 */
console.log(typeof undefined); //undefined
console.log(typeof "STRING"); //string

/**
 * Exercise_1
 * “let name = "John";
 * alert( `Hey ${1}` ); // Hey 1
 * alert( `Hey ${"name"}` ); // Hey name
 * alert( `Hey ${name}` ); // Hey John
 */
let name = "John"
console.log( `Hey ${1}` ); // Hey 1
console.log( `Hey ${"name"}` ); // Hey name
console.log( `Hey ${name}` ); // Hey John
