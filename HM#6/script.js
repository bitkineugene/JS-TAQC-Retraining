// Task1

function uppercase (str) {
    let regExp = /^[A-Z]/;

    if (regExp.test(str)) {
        console.log("string starts with upper case");
    } else {
        console.log("string starts with lower case");
    }
}

uppercase("Big test");
uppercase("kda test");

// Task2 

function validateEmail (email) {
    let regEx = /^\S+@\S+\.\S+/;
    
    console.log(regEx.test(email));
}

validateEmail("testmail777@gmail.com");

// Task 3

let example = "cdbBdbsbz";
let reg = /d(b+)(d)/gi;
let result = reg.exec(example);
console.log(result);

// Task4

let ex = "Java Script";
let re = /(\w+)\s(\w+)/;
let str = ex.replace(re, '$2, $1');
console.log(str);

// Task5

function checkCreditCard (email){
    let regexp = /(^\d{4}([-]|)\d{4}([-]|)\d{4}([-]|)\d{4})$/;
    return regexp.test(email);
}
let cardNumber = "1233-4444-4444-4245";
console.log (checkCreditCard(cardNumber));

// Task6

function checkEmail (email) {
    let mailRegExp = /^[(a-zA-Z0-9)]{2,30}([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

    if (mailRegExp.test(email)) {
        console.log("Email is valid");
    }
    else {
        console.log("Email is not valid");
    }
}
checkEmail ("testmail-_test@gma_il.com");

// Task 7 

function checkLogin (login) {

    let loginRegExp = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
    let numberRegExp = /[0-9]\.]+/g;
    let resultNumber = login.match(numberRegExp);
    let result = loginRegExp.test(login);

    console.log(`${login} is ${result} - ${resultNumber}`);
}

checkLogin('2dd_dkassd2');
checkLogin('checkLogin2');
checkLogin('ee1.1ret3');
checkLogin('ellf1.dasd');
checkLogin('ee1*1ret3');