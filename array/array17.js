// let arr = [1, 3, 5, 7];
// let check = true;

// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] % 2 === 0) {
//     check = false;
//     break;
//   }
// }

// if(check) {
//   console.log("All odd");
// }else {
//   console.log("Not all odd");
// }

let arr = [1, 2, 5];
let check = true;

for(let i = 0; i < arr.length; i++) {
  if(arr[i] % 2 === 0) {
    check = false;
    break;
  }
}

if(check) {
  console.log("All odd");
}else {
  console.log("Not all odd");
}
