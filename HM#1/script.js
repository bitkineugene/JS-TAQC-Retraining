// Task 2
console.log("Bitkin");

// Task 3
let value = "Test"
let num = 100500
value = num
console.log("New value =", value," and", "Old number =", num);

//Task 4
let colorGreen;
const car = {
    brand: "Audi",
    model: 100,
    fromUsa: false,
    colorGreen,
    numberOfOwners: null
}


// Task 5
let isAdult = confirm("Are you 18 years old");
alert(isAdult);
console.log("Are you 18 years old? - ", isAdult);

// Task 6
let firstName = "Yevhen";
typeof firstName;

let secondName = "Bitkin";
typeof secondName;

let learningGroup = "LV.732.TAQC.RETRAINING";
typeof learningGroup;

let yaerOfBirth = 1993;
typeof yaerOfBirth;

let maritalStatus = confirm("Are you merried?");
typeof maritalStatus;

let hometown;
typeof hometown;

let anotherOne = null;
typeof anotherOne;

console.log("Number -", yaerOfBirth, "Boolean -", maritalStatus, "String -", firstName, secondName, learningGroup);

console.log("Undifined -", typeof(hometown), "and Null (in our case its object type) -", typeof(anotherOne));

//Task 7
let login = prompt("Please enter you Login");
let email = prompt("Please enter you E-mail");
let password = prompt("Please enter you Password");

alert("NEVER share your personal data in suspicious forms :)");

console.log("Dear", login,", your email is", email,", your password is", password);

// Task 8
let convertFromMin = 60;
let convertFromHours = convertFromMin * 60;
let convertFromDays = convertFromHours * 24;
let convertFromMonths = convertFromDays * 30;

let enterHours = prompt ("Please enter number of HOURS to convert to seconds");
alert (`In the ${enterHours} hours - ${enterHours*convertFromHours} seconds`);

let enterDays = prompt ("Please enter number of DAYS to convert to seconds");
alert (`In the ${enterDays} days - ${enterDays*convertFromDays} seconds`);

let enterMonths = prompt ("Please enter number of MONTHS to convert to seconds");
alert (`In the ${enterMonths} months - ${enterMonths*convertFromMonths} seconds`);





