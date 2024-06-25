/* Zadanie 4 Mając do dyspozycji poniższy kod, zrefaktoryzuj go tak, aby zbudować interfejs User i odpowiednio wykorzystywać go w kodzie.*/
export const users = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep",
    },
    {
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut",
    },
];
export function logPerson(user) {
    console.log(` - ${user.name}, ${user.age}`);
}
console.log("Users:");
users.forEach(logPerson);
