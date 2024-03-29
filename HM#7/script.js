// Task #1

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x,y, , ...z] = arr;
console.log(x);
console.log(y);
console.log(z);

// Task #2

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};

let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4]} = data;

console.log(name2);
console.log(age2);

console.log(name4);
console.log(age4);


// Task #3

function mul (...args) {
    let value = 1;
    let isNumber = false;
    for (let i of args) {
        if (typeof i == 'number') {
            value = value * i;
            isNumber = true
        }
    }
    return isNumber ? value : 0
}

console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true)); 

// Task #4

let server = {
    data: 0,
    convertToString: function (callback) {
       callback(() => this.data + "");
    }
}

let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },

    notification: function() {
        return (callback => {
            this.result = callback();
        });
    }
}

client.calc(123);
console.log(client.result);
console.log(typeof client.result); 

// Task#5

function mapBuilder(keys, values) {
    let map = new Map();
    for (let i of keys) {
        map.set(i, values[i-1]);
    }
    return map;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"





