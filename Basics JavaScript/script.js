// this is one line comment
/* Example with two rows.
This is many rows comment
*/
/**
 * This is doc comment
 * **/


/**
 * Variables this is containers for data store
 * In JS there is three ways to create variables
 * Classical way is to use: var {container name};
 * Or new command: int {container name};
 * Or use constanta : const {name} = value;
 * These commands have the same meaning but different access. We'll talk about this in the future.
 */

var currentUserName; // var is old command to create variable. In our time there is new command let.
currentUserName = "Nick"; // the value can be assigned after var was created or in the same moment
let catInBlackBox = "Can in black box"; // You can assign value when you create var
const getID = 1234567890; // this is constanta. The value of constanta cant be change after it was added
getID = 123;
console.log(getID); // TypeError: Assignment to constant variable.

let message;
message = "Hello" // saving "Hello" in variable message

let user = "Nick", age = 32, message = "Hey"; // We can create a multiply variables in the same row, but this is bad

/*
In ECMA Script there is restriction for variables names
1. name should contain only letters, numbers or symbols $ and _
2. The first symbol can't be a number
 */

//this is list of legal names
let userName;
let test123;
let $ = 1;
let _ =2;

//this is list of illegal names for variables
//let 1a;
//let my-name;

// Register matters! The variables named apple and AppleE are two different variables

/**
 * Exercise_1
 * Create two variables: admin and name.
 * Copy value "Tommy" to name
 * Copy value from name to admin
 * Using console.log() show value of admin variable
 */

let admin;
let name;
name = "Tommy";
admin = name;
console.log(name);

/**
 * Exercise_2
 * Create a correct names for variables
 * Create name for our planet : ourPlanetEarth
 * Create name for site user : currentUser
 */

/**
 * Exercise_3
 * When we should user capital letters
 * const birthday = '18.04.1982'; const BIRTHDAY
 * const age = someCode(birthday); const age
 *
 */