let n = 5;
let a = 5.3;


let daraja = 1;
let sum = 1;


for (let i = 1; i <= n; i++) {
  daraja *= a;
  sum += daraja;

  console.log(`a^${i} = ${daraja.toFixed(2)}`);
}

console.log(`Yig'indisi: ${sum.toFixed(2)}`);
