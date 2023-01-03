
let functionsText = "The functions.\nTo create functions you should user use next schema:" +
    "\nfunction functionName(argument if needed){\n body\n} "
let textHello = "Hello";
let userName = "Nick"
function showMessage(message) {
   console.log(message);
}

showMessage(functionsText);
showMessage(textHello);
showMessage(userName);
showMessage(userName + " " + textHello);

function showMessage(message) {
    console.log(message);
}

function showText(text = "Default message in case if no argument"){
    console.log(text);
}
showText();
showText("Long long story about sad Patric");
showText(userName);

let number22 = 22;

function countToSomeNumber(number){
    while(number){
        console.log(number);
        number--;
    }
}
countToSomeNumber(number22);

function count(){
    let number22 = 32
    return number22 /2;
}
countToSomeNumber(count());

let number46 = 46;

function numChange(number){
    number46 = number46 + number;
    console.log(number46)
}
numChange(11);
console.log(number46);

function getMinNumber(number_1, number_2) {
    return number_1 >= number_2?number_1:number_2;
}


function newFunction(argument, argument){} // ! function declaration
let newFunctionDirect = function(){}; // ! function expression
let newFunctions = (args, args_2) => { // ! arrow function
    //body
}