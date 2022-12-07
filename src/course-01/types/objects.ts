// Type: Object
const person = {
  name: 'Jhon Doe',
  age: 70,
};

function printPersonDetails(person: { name: string; age: number }) {
  console.log(`Name: ${person.name} | Age: ${person.age}`);
}

printPersonDetails(person);
