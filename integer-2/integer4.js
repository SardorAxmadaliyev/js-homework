let a = 123;
let x = Math.floor(a / 100);
let y = Math.floor(a / 10) % 10;
let z = a % 10;

let result = y * 100 + x * 10 + z;

console.log(result);