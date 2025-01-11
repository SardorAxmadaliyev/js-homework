let n = 5

if (n > 0) {
  console.log(`1 dan ${n} gacha bo'lgan sonlarning kvadrati quyidagicha hisoblanmoqda:`);

  for (let i = 1; i <= n; i++) {
    let kvadrat = 0;
    let formula = "";

    for (let j = 1; j <= 2 * i - 1; j += 2) {
      kvadrat += j;
      formula += (formula === "" ? j : " + " + j);
    }

    console.log(`${i} ning kvadrati: ${formula} = ${kvadrat}`);
  }
} else {
  console.log("Iltimos, n > 0 shartini qanoatlantiruvchi son kiriting.");
}
