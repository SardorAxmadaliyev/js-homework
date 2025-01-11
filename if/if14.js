let n = 43;

let first_number = Math.floor(n / 10);
let second_number = n % 10;
let result = second_number * 10 + first_number;

if (result <= n) {
  console.log("true");
}
else {
  console.log("false");
}