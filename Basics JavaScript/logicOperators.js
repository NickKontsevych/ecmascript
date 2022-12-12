/*
In JavaScript there are 4 operators ||, &&, !, ??
 */
//Operator || (OR), if one of his arguments returns true, than it also returns true
console.log(true || true); // true
console.log(false || true); //true
console.log(true || false); // true
console.log(false || false); // false
//as usual || use in if instructions
let hour = 12;

if (hour < 9 || hour > 18) {
    console.log("Office is closed");
}

//We can have more || in instructions
let officeWorkHour = 12;
let isWeekend = true;

if (hour < 9 || hour > 18 || isWeekend) {
    console.log("The office is closed");
}

// The  || (OR) search for the first true and return it
console.log(1 || 0); //1
console.log(null ||  1); //1
console.log(null || 0 || 1); //1
console.log(undefined || 0 || 0); //0

let firstName = "";
let lastName = "";
let nickName = "SuperDev";

console.log(firstName || lastName || nickName || true); //SuperDev

