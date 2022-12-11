// Narrowing: In

class Dog {
  name;
  breed;

  constructor(name: string, breed?: string) {
    this.name = name;
    if (breed) {
      this.breed = breed;
    }
  }
}

const k9 = new Dog('K9', 'German Shepherd');
const caramelo = new Dog('Caramelo');

function printDogBreed(dog: Dog) {
  if ('breed' in dog) {
    console.log(`Breed: ${dog.breed}`);
  } else {
    console.log('Breed: Mixed-breed');
  }
}

printDogBreed(k9);
printDogBreed(caramelo);
