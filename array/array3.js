// let arr = [1, 5, 9];
// let arrayManfiy = true;

// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] <= 0) {
//     arrayManfiy = false;
//   }
// }

// if(arrayManfiy) {
//   console.log("All positive");
// }else {
//   console.log("At least one non-positive" );
// }

let arr = [1, 0, 9];
let arrayManfiy = true;

for(let i = 0; i < arr.length; i++) {
  if(arr[i] <= 0) {
    arrayManfiy = false;
  }
}

if(arrayManfiy) {
  console.log("All positive");
}else {
  console.log("At least one non-positive" );
}