// Narrowing: Type Guard
function sum(valueOne: number | string, valueTwo: number | string) {
  if (typeof valueOne === 'string' && typeof valueTwo === 'string') {
    console.log(Number(valueOne) + Number(valueTwo));
  } else if (typeof valueOne === 'number' && typeof valueTwo === 'number') {
    console.log(valueOne + valueTwo);
  } else {
    console.log('Insert two strings or two numbers...');
  }
}

sum('1', '4');
sum(5, 5);
sum('5', 5);
