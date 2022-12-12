/**
 * Will be alert shown?
 * if('0'){
 *     alert('Hey');
 * }
 * Yes, the alert message will be shown. The string '0' == true
 */

// if (prompt("What is real name of JS?") === "ECMAScript") {
//     alert("Correct!");
// } else {
//     alert("You don't know, ECMAScript!");
// }
//
// let userEnter = +prompt("Enter any number:")
// if (userEnter >=1) {
//     alert(1);
// } else if (userEnter === 0) {
//     alert(0);
// } else {
//     alert(-1);
// }
//
// let result = a + b < 4 ? "Lower" : "Upper";

// let message;
// if(login == 'Employee') {
//     message = 'Привіт';
// } else if (login == 'Boss') {
//     message = 'Hey';
// } else if (login == '') {
//     message = 'ninja';
// } else {
//     message = '';
// }

// let sendMessage = login == 'Employee'? "Hello": login === 'Boss'? "Hey": login === ''? "ninja": '';

console.log("The data")

/*
Homework part logical operators
 */

console.log(null || 2 || undefined); // 2
console.log(console.log(1) || 2 || console.log(3)); //1 2
console.log( 1 && null && 2); //null(false)
console.log(null || 2 && 3 || 4);

let userAge = 31;

if (userAge >= 14 && userAge <= 90) {
    console.log(userAge)
} else {
    console.log("F*c* you!")
}

if (userAge <= 14 && userAge >= 90) {
    console.log(userAge)
} else {
    console.log("F*c* you!")
}

if (!(userAge >= 14 && userAge <= 90)) {
    console.log(userAge)
} else {
    console.log("F*c* you!")
}

