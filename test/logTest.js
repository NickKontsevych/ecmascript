// ! create function what return the lowest number
function getMinValue(value_1, value_2) {
    return (value_1 >= value_2)?value_2:value_1;
}

console.log(getMinValue(30,31));

// Create function wat multiply modulus

function getModulusValue(value, modulus) {
    return value ** modulus;
}

console.log('Get modulus: ', getModulusValue(1, 100));


let getHey = function (){
    console.log('hey');
}

let yeasAnswer = ['y', 'Y', 'Yes', 'true'];
let noAnswer = ['n', 'no', 'No', 'false'];
const readLine = require('readline-sync');

/**
 * Return answer to question in boolean type
 *
 * @param {string} question - question what user will get
 * @param {string} yes - answer "yes"
 * @param {string} no - answer "no"
 */
function getAsk(question, yes, no) {
    let userInput = readLine.question(question);

    console.log(getBooleanAnswer(userInput)?yes:no);

}
function showOK(){
    return "Ok";
};
function showCancel(){
    return "Cancel";
}
function getBooleanAnswer(answer) {
    if (yeasAnswer.includes(answer)) {
        return true;
    } else if (noAnswer.includes(answer)){
        return false;
    } else {
        console.log("You have entered invalid data");
    }
}

getAsk("Let's go to party?", showOK(), showCancel());
getAsk("Some fucked question", function yes(){
    console.log("yes")}, function no(){console.log("no")});


let fun = (question, yes, no) => {

};

let ask = (question, yes, no) => {
    confirm(question)?yes:no;
}
ask("what?", yes,no);


describe("ask", function (){
    it('should give yes answer', function () {
        assert.equal(ask("question", yes ,no), true)
    });
})