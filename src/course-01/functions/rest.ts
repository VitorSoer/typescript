// Function: Rest
function sumAll(...values: number[]) {
  return values.reduce((number, sum) => sum + number);
}

console.log(sumAll(10, 5, 10));
