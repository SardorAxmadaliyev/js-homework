let a = 101;

if (a >= 10 && a <= 99) {
  if (a % 2 === 0) {
    console.log("Ikki xonali juft son");
  }
  else {
    console.log("Ikki xonali toq son");
  }
}
else if (a >= 100 && a <= 999) {
  if (a % 2 === 0) {
    console.log("Uch xonali juft son");
  }
  else {
    console.log("Uch xonali toq son");
  }
}
else {
  console.log("Kiritilgan son 1 dan katta va 999 dan kichik bo'lishi kerak")
}