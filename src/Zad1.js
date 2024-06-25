"use strict";
class Person {
    constructor(name, age, occupation) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "age", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "occupation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
}
const people = [];
people.push(new Person("Max Mustermann", 25, "Scientist"));
people.push(new Person("Kate Müller", 23, "Astronaut"));
function logPerson(person) {
    console.log(` - ${person.name}, ${person.age}`);
}
console.log("People:");
people.forEach(logPerson);
