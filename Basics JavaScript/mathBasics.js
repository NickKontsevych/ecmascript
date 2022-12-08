console.log("The math basics \n +, -, *, /, %, **")
//Remainder of division %
console.log("Remainder of division %")
console.log("5 % 2 = " + 5 % 2); //1 -- remainder of dividing 5 by 2
console.log("8 % 3 = " + 8 % 3); //2 -- remainder of dividing 8 by 3
console.log("47 % 13 = " + 47 % 13); //8 -- remainder of dividing 47 by 13
//Exponentiation **
console.log("Exponentiation **")
console.log("2 ** 2 = " + 2 ** 2); // 2 * 2 = 4
console.log("2 ** 3" + 2 ** 3); // 2 * 2 * 2 = 8
console.log("2 ** 4 " + 2 ** 4); // 2 * 2 * 2 * 2 = 16
console.log("10 ** 5 = " + 10 ** 5); // 10 * 10 * 10 * 10 * 10 = 100000
//Multiply rows
console.log("Multiply rows")
let myRow = "my_" + "row";
console.log(myRow); //my_row
console.log("'1' + 2 = " + "'" +'1' + 2 + "'"); //'12'
console.log("2 + '1' = " + "'" + 2 + '1' + "'"); //'21'
console.log("2 + 2 + '1' = " + "'" + 2 + 2 + '1' + "'"); //'41'-- the first two are numbers, and they multiply first and after that become string
console.log("'12' + 2 = " + "'" + '12' + 2 + "'"); //122
console.log("'6' / '2' and 6 - '2' become numbers")
console.log(6 - '2'); //4, 2 become number
console.log('6' / '2'); //3, all string become number
//Numeric conversion, unary +
console.log("Numeric conversion, unary +");
let apples = "2";
let oranges = "3";
console.log("apples + oranges = " + apples + oranges ); // "23",
console.log(+apples + +oranges ); //5, the + works the same as Numbers()
//Exercise_1
let a = 1;
let b = 1;
let c = ++a; //2
let d = b++; //1
//Exercise_2
let numTwo = 2;
let numX = 1 + (a *= 2); //5
console.log(numX)
/**Exercise_3
 * “" + 1 + 0; //'10'
 * "" - 1 + 0; //-1
 * true + false; //1
 * 6 / "3" //2
 * "2" * "3"; //6
 * 4 + 5 + "px"; //9px
 * "$" + 4 + 5; //$45
 * "4" - 2; //2
 * "4px" - 2; //NaN
 * "  -9  " + 5 //-9 5
 * "  -9  " - 5 //-14
 * null + 1; //1
 * undefined + 1; //NaN
 * " \t \n" - 2”; //-2
*/
/**Exercise_4
 * let numberFirst = prompt("First num?", 1);
 * let numberSecond = prompt("Second num?", 2);
 * alert(a + b); // 12
 * Expect alert(a + b); // 3
*/
//let numberFirst = prompt("First num?", 1);
//let numberSecond = prompt("Second num?", 2);
//console.log(+a + +b); // 12
//Or
//numberFirst = +prompt("First num?", 1);
//numberSecond = +prompt("Second num?", 2);
//console.log(a + b);

