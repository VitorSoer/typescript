interface IPerson {
  name: string;
  age: number;
}

function showPersonDetails(props: IPerson) {
  return console.log(`Name: ${props.name} | Age: ${props.age}`);
}

showPersonDetails({ name: 'Marcos', age: 20 });
