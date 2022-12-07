// Type: Array
const zooAnimals: string[] = ['Lion', 'Zebra', 'Chimp'];
console.log(zooAnimals);

const grades: number[] = [8, 10, 7];
console.log(grades);

// --------------------------------------------------------------------

const guestList: string[] = [];

const inviteSomeone = (person: string) => guestList.push(person);

const printGuestList = (guestArray: string[]) =>
  guestArray.forEach((guestName) => console.log(`Name: ${guestName}`));

inviteSomeone('Vitor');
inviteSomeone('Isaq');
inviteSomeone('Pedro');

printGuestList(guestList);
