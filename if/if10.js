let a = -7;

if (a > 0) {
  if (a % 2 === 0) {
    console.log("musbat juft son");
  } else {
    console.log("musbat toq son");
  }
} else if (a < 0) {
  if (Math.abs(a % 2) === 0) {
    console.log("manfiy juft son");
  } else {
    console.log("manfiy toq son");
  }
} else {
  console.log("son 0 ga teng");
}
