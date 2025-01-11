let n = 345;
let sum = 0;
while (n > 0) {
    let digit = n % 10;
    if (digit % 2 !== 0) {
        sum += digit;
    }
    n = Math.floor(n / 10);
}

console.log(sum);
