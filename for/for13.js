let n = 5;
let sum = 0;
let ishora = 1;

for (let i = 1; i <= n; i++) {
  sum += ishora * (1 + 0.1 * i);
  ishora *= -1;
}

console.log(`Yig'indi: ${sum.toFixed(5)}`);
