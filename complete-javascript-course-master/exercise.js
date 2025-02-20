//automatic semicolon insertion
/*
function getPerson() {

    return // ;
    {
        firstname: 'tony'
    }
}
console.log(getPerson());
function getPerson() {

    return {
        firstname: 'tony'
    }
}
console.log(getPerson());
*/

//whitespaces 
/*
var
    // creating a variable 
    firstname ,
    lastName ,
    language ;
*/
/*
//function statement
function greet(firstName) {
    console.log('hello ' + firstName);
}
greet();
//function expression 
var greetfunc = function (firstName) {
    console.log('hello ' + firstName)
}
greetfunc();
*/
/*
var greeting = function (name) {
    return 'hello ' + name;
}('amir');
console.log(greeting);


var firstname = 'ali';

(function (name) {
    var greeting = 'hello';
    console.log(greeting + ' ' + name);
}(firstname));
*/
/*
var greetings = 'hola';

(function (global, name) {

    global.greetings = 'hello';
    console.log(greetings + ' ' + name)
}(window, 'amir'));
*/
/*
var person = {
    firstname: 'amir',
    lastname: 'mahrad',
    getFullname: function () {
        var fullname = this.firstname + ' ' + this.lastname;
    }
}
var logName = function (lang1, lang2) {
    console.log('Logged : ' + this.getFullname());
}

logName();
*/

// function greet() { };

// var person = {
//     firstname: 'Default',
//     lastname: 'Default',
//     getFullName: function () {
//         return this.firstname + ' ' + this.lastname;
//     }
// }
// var amir = {
//     firstname: 'amir',
//     lastname: 'khatir'
// }

// amir.__proto__ = person;
// for (var prop in amir) {
//     console.log(prop + ': ' + amir.prop);
// }

function person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}
person.prototype.getFullName = function () {
    return this.firstname + ' ' + this.lastname;
}
var amir = new person('amir', 'khatir');
var mehrad = new person('mehrad', 'elmi');
console.log(amir);
console.log(mehrad);
console.log(amir.getFullName());


