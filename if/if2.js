let a = 50;
let b = 89;
let c = 1;

if ((a > b && a < c) || (a < b && a > c)) {
  console.log(a);
}
else if ((b > a && b < c) || (b < a && b > c)) {
  console.log(b);
}
else {
  console.log(c);
}