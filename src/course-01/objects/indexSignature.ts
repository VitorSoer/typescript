//Objects: Index Signature
interface Coordinates {
  [index: string]: number;
}

const newYork: Coordinates = {
  x: 40.7128,
  y: 74.006,
};

console.table(newYork);
