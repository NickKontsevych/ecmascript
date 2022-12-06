/**
 * Convert to type
 * If we need change type we can use this way to convert value
 */
let cartNumber = 4000000000000000;
console.log(typeof cartNumber); //number
cartNumber = String(cartNumber);
console.log(typeof cartNumber); //string

/**
 * Convert to numbers
 * Convert to numbers in math functions does automatically
 * In case if we want to convert value to numbers we can user Number()
 */
console.log("6" / "2"); //3
console.log(cartNumber / 2); //2000000000000000
let str = "123";
console.log("typeof str: " + typeof str); //string
let num = Number(str);
console.log("typeof num: " + typeof num); //number

let strAge = Number("some string");
console.log("strAge: " + strAge); //Nan

/**
 * Convert to Number
 * undefined -- NaN
 * null -- 0
 * true and false -- 1 and 0
 * string -- the spaces deletes. If the string what we got in result is empty, result = 0.
 * In another case number reads from row. Error shows NaN
 */
console.log("Number --> ' 123 ' --> " + Number(" 123 ")); //123
console.log("Number --> '123z' --> " + Number("123z")); //NaN, the error appears on z symbol
console.log("Number --> true --> " + Number(true)); //1
console.log("Number --> false --> " + Number(false)); //0

/**
 * Convert to Boolean
 * 0, null, undefined, NaN, "" --- false
 * any value --- true
 */
console.log("Boolean --> 0 --> " + Boolean(0)); //false
console.log("Boolean --> null --> " + Boolean(null)); //false
console.log("Boolean --> undefined --> " + Boolean(undefined)); //false
console.log("Boolean --> NaN --> " + Boolean(NaN)); //false
console.log("Boolean --> \"\" --> " + Boolean("")); //false
console.log("Boolean --> 1 --> " + Boolean(1)) //true

