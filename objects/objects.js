let currentUser = {
    name: "Nick",
    age: 33,
    "the best": false,
    test: undefined
};

console.log("user[\"age\"]", currentUser["age"]);
console.log("undefined" in currentUser)

for (let key in currentUser) {
    console.log("Key:", key);
    console.log(`user[${key}]:`, currentUser[key]);
}

let user = {};
user.name = "Ivan";
user.surname = "Smith";
user.name = "Petro";
delete user.name;

for (let key in user) {
    console.log(user.surname, user[key]);
}

function isEmpty(object) {
    for (let key in object) {
        return false;
    }
    return true;
}

// Create a new object
let schedule = {};

// Check if object is empty
console.log(isEmpty(schedule)); // true

// Add value to object
schedule["8:30"] = "Morning";

// Check if object is not empty
console.log(isEmpty(schedule));

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let emptyObject = {};

function totalSalaries(object) {
    // Container for to money
    let sum = 0;

    // Cycle for check every element in object
    for (let key in object) {
        // Add money to sum
        sum = sum + object[key];
    }
    // return total amount
    return sum;
}

console.log(totalSalaries(salaries));
console.log(totalSalaries(emptyObject));

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

// should multiply all numeric , width: 400, height: 600
multiplyNumeric(menu);

for (let key in menu) {
    console.log(menu[key], typeof menu[key]);
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] = obj[key] * 2;
        }
    }
}