// Type: Union - Accepts more than one type

const showBalance = (balance: number | string) => `Balance: ${balance}`;

console.log(showBalance(200));
console.log(showBalance(500));
