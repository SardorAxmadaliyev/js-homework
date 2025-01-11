let n = 56987;

let number1 = Math.floor(n / 10000);
let number2 = Math.floor(n / 1000) % 10;
let number3 = Math.floor(n / 100) % 10;
let number4 = Math.floor(n / 10) % 10;
let number5 = n % 10;

let res = number1;
let index = 0;

if (number2 > res) {
  res = number2;
  index = 1;
}

if (number3 > res) {
  res = number3;
  index = 2;
}

if (number4 > res) {
  res = number4;
  index = 3;
}

if (number5 > res) {
  res = number5;
  index = 4;
}

console.log(`Eng katta raqam: ${res}, Uning indeksi: ${index}`);
