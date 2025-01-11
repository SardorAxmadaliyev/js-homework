let n = 36054;

let number1 = Math.floor(n / 10000);
let number2 = Math.floor(n / 1000) % 10;
let number3 = Math.floor(n / 100) % 10;
let number4 = Math.floor(n / 10) % 10;
let number5 = n % 10;

let result = Math.max(number1,number2,number3,number4,number5);

console.log(result);
