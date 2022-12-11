// Function: Callback as an argument
const sum = (value: number) => value + 10;
const multiply = (value: number) => value * 2;

function printData(
  selectedFunction: (valueToSum: number) => number,
  valueToCalc: number,
) {
  const result = selectedFunction(valueToCalc);

  console.log(result);
}

printData(sum, 5);
printData(multiply, 25);
