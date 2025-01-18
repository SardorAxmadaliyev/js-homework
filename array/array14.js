// let arr = [3, 10, 4];
// let max = arr[0];


// for(let i = 1; i < arr.length; i++) {
//   if(arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log(`Eng katta element = ${max}`);

// if(max % 2 === 0) {
//   console.log("Max is even");
// }else {
//   console.log("Max is odd");
// }

let arr = [2, 5, 7, 11];
let max = arr[0];


for(let i = 1; i < arr.length; i++) {
  if(arr[i] > max) {
    max = arr[i];
  }
}

console.log(`Eng katta element = ${max}`);

if(max % 2 === 0) {
  console.log("Max is even");
}else {
  console.log("Max is odd");
}