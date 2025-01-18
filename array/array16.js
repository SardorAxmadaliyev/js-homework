// let arr = [1, 6, 8];
// let check = false;

// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] % 3 === 0) {
//     check = true;
//     break;
//   }
// }

// if(check) {
//   console.log("Multiple of 3 found");
// }else {
//   console.log("No multiple of 3");
// }

let arr = [2, 5, 7];
let check = false;

for(let i = 0; i < arr.length; i++) {
  if(arr[i] % 3 === 0) {
    check = true;
    break;
  }
}

if(check) {
  console.log("Multiple of 3 found");
}else {
  console.log("No multiple of 3");
}