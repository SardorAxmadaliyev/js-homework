let arr = [1, -1, 5, 9];
let min = arr[0];


for(let i = 1; i < arr.length; i++) {
  if(arr[i] < min) {
    min = arr[i];
  }
}

if(min < 0) {
  console.log("There is a negative");
}else {
  console.log("No negatives" );
}

// let arr = [1, 7, 5, 9];
// let min = arr[0]; // 1


// for(let i = 1; i < arr.length; i++) {
//   if(arr[i] < min) {
//     min = arr[i];
//   }
// }

// if(min < 0) {
//   console.log("There is a negative");
// }else {
//   console.log("No negatives" );
// }