let a = 230;

let first_number = Math.floor(a / 100);
let second_number = Math.floor(a % 100) / 10;
let third_number = a % 10;

let yigindi = first_number + second_number + third_number;

let kupaytma = first_number * second_number * third_number;

console.log(yigindi,kupaytma);