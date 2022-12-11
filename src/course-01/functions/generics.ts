// Function: Generics
function genericArray<T>(arr: T[]) {
  return arr;
}

console.log(genericArray(['Pearl Jam', 'Korn', 'Incubus']));
console.log(genericArray([1, 2, 3, 4, 5]));
console.log(genericArray([true, false, true]));

function mergeArrays<T>(arrOne: T[], arrTwo: T[]) {
  return arrOne.concat(arrTwo);
}

console.log(mergeArrays<number | string>([1, 2, 3], ['The Witcher', 'Fifa', 'Undisputed']));
