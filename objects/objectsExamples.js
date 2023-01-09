// ! Objects: basics

let objectConstructorWay = new Object(); // this is syntax "objects constructor"
let objectLiteralWay = {}; // this is syntax "object literal"

let sizes = { // object
    a: 10, // under the key "a" we store the value "10"
    b: 20, // under the key "b" we store the value "20"
    c: 80, // under the key "c" we store the value "80"
    d: 21, // under the key "d" we store sym of a + b
    "size": "Hey" // we can use words as key
}

console.log(sizes.a, sizes.b, sizes.c, sizes.d, sizes["size"]);

let key_2 = "Key";
let obj = {};

console.log(obj.key_2); // undefined

obj.key_2 = key_2;
console.log(obj.key_2); // Key

function makeUser(name, age) {
    return {
        name: name,
        age: age
    };
}

let makeUserNewUser = makeUser("Misha", "32");
console.log(typeof makeUserNewUser, makeUserNewUser.name, makeUserNewUser.age);

let getTestMessage = {
    trrr: this.trrr,
    age: 30
}

console.log(getTestMessage.name)

// ! for (key in object) { cycle body works for every obj element }

for (key in sizes) {
    console.log(sizes[key]) //
}

// !

let user = {};
user["name"] = "Ivan"
user.surname = "Smith"
user.name = "Petro"
delete user.name

for (key in user) {
    console.log(user[key])
}

// !!

let schedule = {}
console.log("obIsEmpty(schedule): true", obIsEmpty(schedule)); // true
schedule["8:30"] = "Up";
console.log("obIsEmpty(schedule): false ", obIsEmpty(schedule)); // false

function obIsEmpty(obj) {
    for (key in obj) {
        return false
    }
    return true
}

// !!!
let companyEmpty = {};
let companyAvenga = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sum(object) {
    let sum = 0;

    for (key in object) {
        sum = sum + object[key];
    }
    return sum;
}

console.log("companyEmpty", sum(companyEmpty))
console.log("companyAvenga", sum(companyAvenga));

// !!!!

function multiplySizes(obj) {
    for (key in obj) {
        if ( typeof obj[key] == "number") {
            obj[key] *= 2
            //obj[key] = obj[key] * 2
        }
    }
}
multiplySizes(sizes);


for (key in sizes){

    console.log(sizes[key]);
}
// !!!


// Calculator method
let calculator = {
    a: null,
    b: null,
    read() {
        this.a = confirm("Enter high");
        this.b = confirm("Enter width");
    },
    multiple() {
        return this.a + this.b
    }


}