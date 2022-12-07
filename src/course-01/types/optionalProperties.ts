// Optional properties: Add the ? character

// Not optional

const itemData = {
  id: 257,
  description: 'Playstation 5 - God of War | Digital Deluxe',
};

function printOrderData(order: { id: number; description: string }) {
  console.log(`Order Id: ${order.id} | Description: ${order.description}`);
}

printOrderData(itemData);

// Optional
const printPersonData = (name: string, age?: number) => {
  if (age === undefined) return console.log(`Name: ${name}`);

  return console.log(`Name: ${name} | Age: ${age}`);
};

printPersonData('Don Draper');
printPersonData('Don Draper', 54);
