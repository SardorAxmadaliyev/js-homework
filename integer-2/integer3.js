let a = 765;
let x = Math.floor(a / 100);
let y = Math.floor(a / 10) % 10;
let z = a % 10;

let result = z * 100 + y * 10 + x;

console.log(result);
