let n = 2;
let a = 5.3;

if (n > 0) {
  console.log(`a = ${a} ning 1 dan ${n} gacha bo'lgan barcha darajalari:`);
  let daraja = 1;

  for (let i = 1; i <= n; i++) {
    daraja *= a;
    console.log(`a^${i} = ${daraja}`);
  }
} else {
  console.log("Iltimos, n > 0 shartini qanoatlantiruvchi son kiriting.");
}
