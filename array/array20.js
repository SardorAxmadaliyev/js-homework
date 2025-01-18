// let arr = [1, 2, 3, 0];
// let n = arr.length;


// let sum1 = 0, sum2 = 0;
// for (let i = 0; i < n / 2; i++) {
//   sum1 += arr[i];
//   sum2 += arr[i + n / 2];
// }


// if (sum1 === sum2) {
//   console.log("Balanced");
// } else {
//   console.log("Not balanced");
// }

let arr = [2, 2, 2, 3];
let n = arr.length;


let sum1 = 0, sum2 = 0;
for (let i = 0; i < n / 2; i++) {
  sum1 += arr[i];
  sum2 += arr[i + n / 2];
}


if (sum1 === sum2) {
  console.log("Balanced");
} else {
  console.log("Not balanced");
}