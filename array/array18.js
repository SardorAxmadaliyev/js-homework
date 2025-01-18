// let arr = [7, 7, 7];
// let check = true;

// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] !== arr[0]) {
//     check = false;
//     break;
//   }
// }

// if(check) {
//   console.log("All are same");
// }else {
//   console.log("Not all same");
// }

let arr = [7, 7, 8];
let check = true;

for(let i = 0; i < arr.length; i++) {
  if(arr[i] !== arr[0]) {
    check = false;
    break;
  }
}

if(check) {
  console.log("All are same");
}else {
  console.log("Not all same");
}