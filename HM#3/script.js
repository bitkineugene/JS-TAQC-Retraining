// Task1

let arrayFor = [2,3,4,5];
let results1 = 1;

// using FOR

for (let i = 0; i < arrayFor.length; i++) {
    results1 *= arrayFor[i];
}
alert(results1);

// using WHILE

let arrayWhile = [2,3,4,5];
let results2 = 1;
let i = 0;
while (i < arrayWhile.length){
    results2 *= arrayWhile[i];
    i++;
}
alert(results2);

// Task2

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      alert([i] + " is odd");
    }
    else {
      alert([i] + " is even");
    }
};

// Task3

const min = 1;
const max = 500;
const arrayLength = 5;
let array = [];
for (let i = 0; i < arrayLength; i++) { 
  array.push(randomInteger(min,max));
  }
console.log(array); 

function randomInteger (min, max){
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

// Task4

let a = parseInt(prompt("Please type integer number A"));
let b = parseInt(prompt("Please type integer number B"));

console.log(raiseToDegree(a,b));


function raiseToDegree (a,b) {
  let result = a ** b;
  return result;
}

// Task5

console.log(findMin(10,5,3,-49,5,-51,-50,100,10000));

function findMin() {
  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    arr[i] = arguments[i];
  }
  const minimum = Math.min(...arr);
  return minimum;
}

// Task6
let array6 = [1,5,3,4,5,32,1234];
console.log(checkUnique(array));

function checkUnique (array) {
  let a = array.length;
  for (let i = 0; i < a-1; i++) {
    for (let j = i+1; j < a; j++) {
      if (array[i] === array[j])
       return false;
      }
    }
  return true;
}

// Task7

let array7 = [5,559,5,-230,0,13,44];

console.log(getLastElem(array,2));

function getLastElem (array, index) {

let k = 0;
let lastElements = new Array();
if (index < array.length) {
  for (let i = array.length-index; i < array.length; i++) {
    lastElements[k] = array[i];
    k++;

    } return lastElements;
  } else return array;
}

// Task8

const str = "i love java script";

console.log(toCapitalize(str));

function toCapitalize (string) {
  let splitted = string.split(" ");
  let capitalize = "";

for (let i in splitted) {
    let words = splitted[i];
    let letters = words.substring(0, 1).toUpperCase();
    let otherPart = words.substring(1, words.length)
    capitalize += letters + otherPart + " ";
}
  return capitalize;
}





