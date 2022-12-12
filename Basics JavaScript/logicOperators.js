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

// Operator && (and)

console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

let currentTimeHour = 10;
let currentTimeMinutes = 30;

if (currentTimeHour == 10 && currentTimeMinutes == 30) {
    console.log("Current time 10:30");
}

//The && searches for the first false
//The && returns first false or last value if it can't find false
console.log(1 && 0); //0
console.log(1 && 5); //5
console.log(null && 5); //null
console.log(0 && "someText"); //0
console.log(1 && 2 && null && 3); //null
console.log(1 && 2 && 3); //3

//THe priority of && higher than ||


//The operator ! (No)
console.log(!true); //false
console.log(!false); //true
console.log(!0); //true

//Double !! convert value to boolean type
console.log(!!"The some text"); //true
console.log(!!null); //false