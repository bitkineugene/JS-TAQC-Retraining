// Task1

function calcRectangleArea() {

    const width = +prompt("Please enter your value for width");
    const height = +prompt("Please enter your value for height");

    if (isNaN(width)) {
        throw new Error("Sorry, value for width is not a number"); 
    }
    else if (isNaN(height) ){
        throw new Error("Sorry, value for height is not a number");
    }

    return width * height;

    }
    try {
        let result = calcRectangleArea();
        console.log(result);
    } catch(exception) {
        console.log(exception.message);
    }

// Task2

function checkAge() {
    const age = prompt ("Please enter your age");

    if (age.length === 0) {
        throw new Error ("The field is empty! Please enter your age");
    }
    else if (isNaN(age)) {
        throw new Error ("Entered value is not a number");
    }
    else if (age < 14) {
        throw new Error ("You are too young to watch this movie")
    }

    return console.log("Request for watching the film is approved");
}

    try {
        let request = checkAge();
        console.log(request);
    } catch(exception) {
            console.log(exception.name);
            console.log(exception.message);
    }
    
// Task3

class MonthException {
    constructor(message) {
        this.message = message;
        this.name = "MonthException";
    }
}

let monthId = +prompt("Enter number of a month");

function showMonthName(month) {

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    if (month > 12 || month < 1) {
        throw new MonthException ("Incorrect month number");

    } return console.log(months[month-1]);
}

try {
    showMonthName(monthId);
} catch(MonthException) {
        console.log(MonthException.name);
        console.log(MonthException.message);
}

// Task4

function showUser (id) {

    if (id < 0) throw new Error ("ID must not be negative: " + id);
    return {id};
}

function showUsers (ids) {

    let users = [];
    for (let i of ids) {
        
        try {
            users.push(showUser(i));
        } catch (error) {
            console.log(error.message);
        }
    }
    return users;
}


let usersId = [88,44,12,-2,33];
console.log(showUsers(usersId));