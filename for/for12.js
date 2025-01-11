let n = 5;
let sum = 1;

for (let i = 1; i <= n; i++) {
  sum *= (1 + 0.1 * i);
}

console.log(`Ko'paytma: ${sum.toFixed(5)}`);
