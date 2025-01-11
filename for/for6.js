let a = 38000;

for (let i = 1.2; i <= 2; i += 0.2) {
  console.log(`${i.toFixed(1)}kg konfetning narxi:`, (i * a).toFixed(2));
}