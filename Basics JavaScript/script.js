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
