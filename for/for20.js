let n = 5;
let result = 1;
let sum = 0;

for (let i = 1; i <= n; i++) {
  result *= i;
  console.log(`${i}! = ${result}`);
  sum += result;
}

console.log(`Umumiy yig'indi:${sum}`);
