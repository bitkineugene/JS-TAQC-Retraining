// Task1

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
}

function propsCount(object){
    return Object.keys(object).length
}

console.log(propsCount(mentor))

// Task2

let student = {
        name: "John",
        surname: "Wickers",
        age: 20,
        score: 90,
        course: "JS fundamental"
}

function showProps(object) {

    //  return Object.keys(object).map(key => {
    //      return `${key}: ${object[key]}`
    // })
        let array = [];
        for (let key in object) {
            array.push(key + ": " + object[key]);
}
    return array;
}

console.log(showProps(student))

// Task3

class Person {

    constructor(name, surname)
    {
        this.name = name;
        this.surname = surname;
    }
    showFullName() { return this.name + " " + this.surname; }

}

class Student extends Person {
    
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName (middleName) { 
        return super.showFullName() + " " + middleName;
}
    showCourse() {
        const currentYear = 2022;
        if (this.year < 2017 || this.year > 2023 || isNaN(this.year) || this.year.length === 0){
            return alert("Please select correct year of course for student");
        }
        return currentYear - this.year + 1;
    }
}

const student1 = new Student ("William", "Harmonok", 2022);
console.log(student1.showFullName("Tom"));
console.log(student1.showCourse());

// Task4

class Worker {
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays) {
            this.fullName = fullName;
            this.dayRate = dayRate;
            this.workingDays = workingDays;
        }
        showSalary() {
            return this.fullName + ": " + this.dayRate * this.workingDays;
        }        

        showSalaryWithExperiences() {
            return Number((this.dayRate * this.workingDays * this.#experience).toFixed(2));
        }

        set setExp (value) {
            if (value < 0) throw new Error ("Experience should be positive");
            this.#experience = value;
        }
        get getExp () {
            return this.#experience;
        }
}
// dynamic sorting by salary

function dynamicSort (workers) {
        
    return workers
       .sort((a,b) => a.showSalaryWithExperiences() - b.showSalaryWithExperiences())
       .map(worker => {
           return {name: worker.fullName, salary: worker.showSalaryWithExperiences()}});
   }

try {
    let worker1 = new Worker ("John Becker", 95, 30);
    let worker2 = new Worker ("Gregory House", 54, 17);
    let worker3 = new Worker ("Tom Cruse", 233, 11);
    let worker4 = new Worker ("Arnold Schwarzenegger", 195, 25);
    let worker5 = new Worker ("Tim Hook", 75, 28);

    console.log(worker1.fullName)
    console.log(worker1.showSalary());
    console.log("Coefficient of experience: " + worker1.getExp);
    console.log("Salary with coefficient of exp: " + worker1.showSalaryWithExperiences());
    worker1.setExp = 1.5;
    console.log("New coefficient of experience: " + worker1.getExp);
    console.log("Salary with coefficient of exp: " + worker1.showSalaryWithExperiences());

    console.log(worker2.fullName)
    worker2.setExp = 3.5;
    console.log("New coefficient of experience: " + worker2.getExp);
    console.log("Salary with coefficient of exp: " + worker2.showSalaryWithExperiences());

    console.log(worker3.fullName)
    worker3.setExp = 2.5;
    console.log("New coefficient of experience: " + worker3.getExp);
    console.log("Salary with coefficient of exp: " + worker3.showSalaryWithExperiences());

    console.log(worker4.fullName)
    worker4.setExp = 1.9;
    console.log("New coefficient of experience: " + worker4.getExp);
    console.log("Salary with coefficient of exp: " + worker4.showSalaryWithExperiences());

    console.log(worker5.fullName)
    worker4.setExp = 1.1;
    console.log("New coefficient of experience: " + worker5.getExp);
    console.log("Salary with coefficient of exp: " + worker5.showSalaryWithExperiences());

    // sorting

    console.log (dynamicSort([worker1, worker2, worker3, worker4, worker5]));

} catch (error) {
    console.log(error.message);
}



// Task5

class GeometricFigure {

    getArea() {}

    toString () {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {

    constructor(a,b,c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getArea() {

        if (this.a + this.b > this.c && this.a + this.c > this.b && this.b + this.c > this.a) {

            const p = (this.a + this.b + this.c) / 2;
            const square = (p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5;

            return square;
        } 
        throw new Error ("Incorrect values for Triangle Area");
    } 
}

class Square extends GeometricFigure {

    constructor(x) {
        super();
        this.x = x;
    }

    getArea() {
        return Math.pow (this.x, 2);
    }
}

class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

function handleFigures (figures) {
    const sumOfAreas = figures.reduce ((acc, figure) => {
        if (figure instanceof GeometricFigure){
            console.log ("Geometric figure: " + figure.toString() + " - area: " + figure.getArea());
            return acc + figure.getArea();
        }

    },0) 

    console.log ("Total area: " + sumOfAreas);
}


let figure = new Triangle (3,4,5);
let figure2 = new Circle (40);
let figure3 = new Square (30);

handleFigures ([figure, figure2, figure3]);