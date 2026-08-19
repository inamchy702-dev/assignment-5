

//task 1
let fruits = ['apple', 'mango','banana']
fruits.push('orange');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.forEach(function(fruit){
    console.log(fruit);
});

//task 2
let numbers = [10, 20, 30, 40, 50];
let result = numbers.map(number => number + 10);
console.log(result);
let filteredNumbers = numbers.filter(number => number > 30);
console.log(filteredNumbers);

//task 3 
let marks = [40, 55, 70, 85, 30]
let totalMarks = marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalMarks);

let num = marks.find(mark => mark >= 70);
console.log(num);

let index = marks.findIndex(mark => mark > 70);
console.log(index);

//task 4
let student = {
    name: 'Rahim',
    age: 22,
    city: 'Chattogram'
}
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));
console.log(student.hasOwnProperty("name"))


//task 5
let set = new Set([10, 20, 30]);
set.add(40);
console.log(set);

set.delete(20);
console.log(set);
console.log(set.has(30));

set.forEach(function(set){
    console.log(set)
});


//task 6
let person = new Map( );
person.set("Name", "Rahim");
person.set("Age", 22);
console.log(person.get("Name"));

console.log(person.has("Age"));

console.log(person.size);

//task 7
const a = [1,2,3];
const b = [4,5,6];
const x = [...a, ...b];
console.log(x)

function sum(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}
console.log(sum(10, 20, 30));

//task 8
class Students { 
    constructor (name,age,course){
        this.name = name;
        this.age = age;
        this.course = course;
    }
}
let student1 = new Students("Rahim", 22, "Javascript");
console.log(student1);
let student2 = new Students("Karim", 23, "Python");
console.log(student2);

//task 9
class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, studentId) {
        super(name);
        this.studentId = studentId;
    }


    introduce() {
        console.log(`Hello, my name is ${this.name} and my student ID is ${this.studentId}`);
    }
}

let student = new Student("Rahim", 101);

student.introduce();

//task 10
class BankAccount {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: ${amount}`);
        console.log(`Current balance: ${this.balance}`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn: ${amount}`);
            console.log(`Current balance: ${this.balance}`);
        } else {
            console.log("Insufficient balance");
        }
    }
}

let account = new BankAccount("Rahim", 5000);

account.deposit(1000);
account.withdraw(500);