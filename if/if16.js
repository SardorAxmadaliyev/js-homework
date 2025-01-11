let n = 8481;

let sum = 0;

sum += n % 10;
n = Math.floor(n / 10);

if (n > 0) {
  sum += n % 10;
  n = Math.floor(n / 10);
}

if (n > 0) {
  sum += n % 10;
  n = Math.floor(n / 10);
}

if (n > 0) {
  sum += n % 10;
}

console.log(sum);
