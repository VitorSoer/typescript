// Objects: interfaces
interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function printProductDetails({ name, price, isAvailable }: Product) {
  if (isAvailable) {
    return console.log(`Name: ${name} | Price: ${price} | Available`);
  }

  console.log(`Name: ${name} | Price: ${price} | Unavailable`);
}

const shirt: Product = {
  name: 'Playstation 5',
  price: 499.99,
  isAvailable: true,
};

printProductDetails(shirt);
printProductDetails({
  name: 'Xbox Series X',
  price: 499.99,
  isAvailable: false,
});
