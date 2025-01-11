let x = 1.5;
let fx;

if (x <= 0) {
  fx = -x;
}
else if (x > 0 && x < 2) {
  fx = Math.pow(x,2);
}
else {
  fx = 4;
}

console.log(fx);
