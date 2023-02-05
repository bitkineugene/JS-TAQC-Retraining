// Task#1

function getPromises(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        },delay);
    })
}

getPromises("test promise", 2000).then((message) => {
    console.log(message);
})

// Task#2

function calcArrProduct(arr) {
    return new Promise ((resolve, reject) => {
    let numbers = 1;
    for (let i of arr) {
        if (typeof i === "number") {
            numbers = numbers * i;
        } else reject("Error! Incorrect array!");
    }
    resolve(numbers);
    })
}

calcArrProduct([3,4,3,5]).then(result => console.log(result));

// Task#3

const delayAndGetRandom = (delay) => {
    return new Promise(resolve => setTimeout(
      () => {
        const val = Math.trunc(Math.random() * 100);
        resolve(val);
      }, delay
    ));
  };

const wait = (i, delay) => new Promise(resolve => setTimeout(() => resolve(i), delay));

// using promise
const printNumbers = () => new Promise((resolve) => {
  let pr = Promise.resolve(0);
  for (let i = 1; i <= 10; i += 1) {
    pr = pr.then((val) => {
      console.log(val);
      return wait(i, Math.random() * 1000);
    });
  }
  resolve(pr);
});

printNumbers().then(result => console.log(result));


// Task#4 - using async/await

async function printNumbersUsingAsync() {
    for (let i = 0; i <= 10; i++) {
      await wait(i, Math.random() * 1000);
      console.log(i);
    }
  }

printNumbersUsingAsync();

