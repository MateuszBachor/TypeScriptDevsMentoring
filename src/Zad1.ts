/* Zadanie 1 */
interface IPerson {
  name: string;
  age: number;
  occupation: string;
}
class Person implements IPerson {
  name: string;
  age: number;
  occupation: string;

  constructor(name: string, age: number, occupation: string) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }
}

const people: IPerson[] = [];
people.push(new Person("Max Mustermann", 25, "Scientist"));
people.push(new Person("Kate Müller", 23, "Astronaut"));

function logPerson(person: Person) {
  console.log(` - ${person.name}, ${person.age}`);
}

console.log("People:");
people.forEach(logPerson);
