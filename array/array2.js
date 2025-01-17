// let arr = [-1, -4, -8];
// let arrayManfiy = true;

// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] >= 0) {
//     arrayManfiy = false;
//     break;
//   }
// }

// if(arrayManfiy) {
//   console.log("All negative");
// }else {
//   console.log("At least one non-negative" );
// }

let arr = [-2, 0, -5];
let arrayManfiy = true;

for(let i = 0; i < arr.length; i++) {
  if(arr[i] >= 0) {
    arrayManfiy = false;
    break;
  }
}

if(arrayManfiy) {
  console.log("All negative");
}else {
  console.log("At least one non-negative" );
}