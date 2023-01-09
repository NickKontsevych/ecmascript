let alex = {
    name: "Alex"
};
let alexCopy = alex;

console.log("alex.name", alex.name, "alexCopy.name", alexCopy.name) // alex

alexCopy.name = "Bob";

console.log("alex.name", alex.name, "alexCopy.name", alexCopy.name)  // bob

// ! Clone object

let obj_1 = {name: "Nick"};
let obj_2 = {canView: true};
let obj_3 = {canEdit: true};

Object.assign(obj_1, obj_2, obj_3);

for (key in obj_1) {
    console.log(obj_1[key]) // Nick, true, true
}

// !
let obj_changeName = {
    name: "Ivan"
}

Object.assign(obj_changeName, obj_1);

for (key in obj_changeName) {
    console.log(obj_1[key]) // Nick, true, true
}


