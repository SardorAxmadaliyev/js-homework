let arr = [6, 7, 10];
let min = arr[0];


for(let i = 1; i < arr.length; i++) {
  if(arr[i] < min) {
    min = arr[i];
  }
}

console.log(`Eng kichik element = ${min}`);

if(min > 5) {
  console.log("Min > 5");
}else {
  console.log("Min ≤ 5");
}

// let arr = [5, 6, 7];
// let min = arr[0];


// for(let i = 1; i < arr.length; i++) {
//   if(arr[i] < min) {
//     min = arr[i];
//   }
// }

// console.log(`Eng kichik element = ${min}`);

// if(min > 5) {
//   console.log("Min > 5");
// }else {
//   console.log("Min ≤ 5");
// }