// Defining types on functions - Parameters and Returns

// Only the parameter
function printParamsType(params: string) {
  return console.log(typeof params);
}

printParamsType(`I'm a parameter...`);

// Defining the type of return
function generateARandomNumber(): number {
  const randomNumber = Math.round(Math.random() * 5);

  return randomNumber;
}

console.log(generateARandomNumber());
console.log(typeof generateARandomNumber());