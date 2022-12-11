// Task1

let x = 1;
let y = 2;

let res1 = String(x)+String(y);
console.log(res1);
console.log(typeof res1);

let res2 = true + String(y);
console.log(res2);
console.log(typeof res2);

let res3 = x != y;
console.log(res3);
console.log(typeof res3);

let res4 = x + y / "x + y";
console.log(res4);
console.log(typeof res4);

// Task2

let number = prompt("Type your number multiple 2 or 7");

if (number < 0) {

console.log("Please enter another number, which will positive and multiple 2 or 7");

} else if (number % 2 == 0 && number % 7 == 0) {

    console.log(number,"- number is even, multiple of 7 and positive");

} else if (number % 2 == 0) {

    console.log(number,"- number is even and positive");

} else console.log(number,"- number is positive and multiple of 7 ");

// Task3

const arr = [];
arr[0] = 777;
arr[1] = "value";
arr[2] = arr[0] =! arr[1];
arr[3] = null;

alert("Length of array is " + arr.length);

arr[4] = prompt("Fill 5th block to current array");

alert("Fifth element of array is " + arr[4]);

arr.shift();

alert(arr);

// Task4

let cities = ["Rome","Lviv","Warsaw"];

let convToString = cities.join('*');

console.log(convToString);

// Task5

let isAdult = prompt("How old are you?");

if (isAdult >= 18) {
    alert("You are adult, buy yourself a beer!");
}
else alert("Sorry, you need to grow up a little");

// Task6

let a = parseFloat(prompt("Type 'A' side of triangle"));

let b = parseFloat(prompt("Type 'B' side of triangle"));

let c = parseFloat(prompt("Type 'C' side of triangle"));


  if (a + b > c && a + c > b && b + c > a) {

    const p = (a + b + c) / 2;
    const square = (p * (p - a) * (p - b) * (p - c)) ** 0.5;

    console.log(square.toFixed(3));

    if (Math.pow(a,2) == Math.pow(c,2) + Math.pow(b,2) || Math.pow(b,2) == Math.pow(c,2) + Math.pow(a,2) || Math.pow(c,2) == Math.pow(a,2) + Math.pow(b,2)) {

        console.log("Its a right triangle");
    
    } else console.log ("Its not a right triangle");

  } else alert ("Incorrect value");


// Task7

// First solution:

let time1 = new Date().getHours();

if (5 <= time1 && time1 < 11) {
    alert ("Good morning!");

} else if (11 <= time1 && time1 < 17) {
    alert ("Good afternoon!");

} else if (17 <= time1 && time1 < 23) {
    alert ("Good evening!");

} else alert ("Good night!");

// Second solution:

let time2 = new Date().getHours();

switch(time2) {

    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 23:
        alert("Good night!");
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        alert("Good morning!");
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        alert("Good afternoon!");
        break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
        alert("Good evening!");
        break;
    default:
        alert("Ooops, something went wrong! :(");
}


// Third solution:

let time3 = new Date().getHours();

switch (true) {
    case time3 >= 23:
        alert("Good night!");
        break;
    case time3 >= 17:
        alert("Good evening!");
        break;
    case time3 >= 11:
        alert("Good afternoon!");
        break;
    case time3 >= 5:
        alert("Good morning!");
        break;
    default:
        alert("Good night!");
}


