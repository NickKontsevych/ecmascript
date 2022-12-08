console.log("Comparison operators")
let numberA = 10;
let numberB = 100;
let numberC = 10;
console.log("numberA > numberB = ", numberA > numberB); //false
console.log("numberA < numberB = ", numberA < numberB); //true
console.log("numberA >= numberC = ", numberA >= numberC); //true
console.log("numberA == numberB = ", numberA == numberB); //false
console.log("numberA == numberC = ", numberA == numberC); //true
console.log("numberA != numberB = ", numberA != numberB); //true
console.log("numberA != numberC = ", numberA != numberC); //false
/**
 * Alphabetic compare
 */
console.log("'Y' > 'A' = ", 'Y' > 'A'); //true
console.log("'Word' > 'Work' = ", 'Word' > 'Work'); //false
/**
 * Compare different types
 */
console.log("'2' > 1 = ", '2' > 1); //true, string '2' become number 2
console.log("'01' == 1 = ", '01' == 1); //true, the string '01' become number 1
console.log("true == 1 = ", true == 1 ); //true, the logical true become 1
console.log("false == 0 = ", false == 0); //true, the logical false become 0
let numberZero = 0;
console.log(Boolean(numberZero)); //false
let stringZero = '0';
console.log(Boolean(stringZero)); //true
console.log("numberZero == stringZero", numberZero == stringZero); //true
/**
 * Strict Compare ===
 * The usual '==' does not see any difference between 0 and false :
 * 0 == false //true
 * "" == false // true
 * The '===' compare types, if type are different you will get false immediately
 * 0 === false //false
 */
console.log("null > 0 //", null > 0 ); //false
console.log("null == 0 //", null == 0 ); //false
console.log("null >= 0 //", null >= 0 ); //true
console.log("undefined > 0", undefined > 0); //false
console.log("undefined < 0", undefined > 0); //false
console.log("undefined == 0", undefined > 0); //false
/**Exercise_1
 * 5 > 4 //true
 * "apple" < "pineapple" //true
 * "2" > "12"
 * undefined == null //true
 * undefined === null //false
 * null == "\n0\n" //false
 * null === +"\n0\n” //false
 * null >= "\n0\n" //true
 */
console.log(null >= "\n0\n")