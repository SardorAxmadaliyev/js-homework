let a = 38000;

for (let i = 0.1; i <= 1; i += 0.1) {
  console.log(`${i.toFixed(1)}kg konfetning narxi:`, (i * a).toFixed(2));
}