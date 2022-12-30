// ! create function what return the lowest number
function getMinValue(value_1, value_2) {
    return (value_1 >= value_2)?value_2:value_1;
}

console.log(getMinValue(30,31));

// Create function wat multiply modulus

function getModulusValue(value, modulus){
    return value ** modulus;
}

console.log('Get modulus: ', getModulusValue(1, 100));

