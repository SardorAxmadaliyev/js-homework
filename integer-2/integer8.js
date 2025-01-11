let x1 = -9.7, y1 = -9.9;
let x2 = 0.0, y2 = 2.9;
let x3 = -0.1, y3 = 5.2;

let a = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
let b = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2);
let c = Math.sqrt((x1 - x3) ** 2 + (y1 - y3) ** 2);

let P = a + b + c;
let p = P / 2;  

let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));

P = P.toFixed(2);
S = S.toFixed(2);

console.log("Perimetr (P):", P);
console.log("Yuza (S):", S);