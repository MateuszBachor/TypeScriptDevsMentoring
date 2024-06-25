/* Zadanie 5
Wskaż nieprawidłowości w typach zmiennych w funkcji logPerson.
 Funkcja ta powinna akceptować zarówno obiekt klasy User i Admin oraz powinna zwracać konkretne
 informacje w zależności od przesłanego typu obiektu: occupation dla User i role dla Admin.*/

interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

export function logPerson(person: Person) {
  let additionalInformation: string;
  if ("role" in person) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
// interface User {
//   type: "user";
//   name: string;
//   age: number;
//   occupation: string;
// }

// interface Admin {
//   type: "admin";
//   name: string;
//   age: number;
//   role: string;
// }

// export type Person = User | Admin;

// export const persons: Person[] = [
//   {
//     type: "user",
//     name: "Max Mustermann",
//     age: 25,
//     occupation: "Chimney sweep",
//   },
//   {
//     type: "admin",
//     name: "Jane Doe",
//     age: 32,
//     role: "Administrator",
//   },
//   {
//     type: "user",
//     name: "Kate Müller",
//     age: 23,
//     occupation: "Astronaut",
//   },
//   {
//     type: "admin",
//     name: "Bruce Willis",
//     age: 64,
//     role: "World saver",
//   },
// ];

// export function logPerson(person: Person) {
//   let additionalInformation: string;
//   switch (person.type) {
//     case "admin":
//       additionalInformation = person.role;
//       break;
//     case "user":
//       additionalInformation = person.occupation;
//       break;
//   }
//   console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
// }

// persons.forEach(logPerson);
