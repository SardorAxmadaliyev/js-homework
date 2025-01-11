let n = 5;
let a = 5.3;

if (n > 0) {
  console.log(`a = ${a} ning 1 dan ${n} gacha bo'lgan barcha darajalari va yig'indisi:`);

  let daraja = 1;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    daraja *= a;
    sum += daraja;

    console.log(`a^${i} = ${daraja.toFixed(2)}`);
  }

  console.log(`Yig'indisi: ${sum.toFixed(2)}`);
} else {
  console.log("Iltimos, n > 0 shartini qanoatlantiruvchi son kiriting.");
}
