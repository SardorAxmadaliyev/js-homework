// let arr = [1, 2, 2, 3];

// let check = false;
// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] === arr[i + 1]) {
//     check = true;
//     break;
//   }
// }

// if (check) {
//   console.log("Adjacent duplicates found");
// } else {
//   console.log("No adjacent duplicates");
// }

let arr = [3, 3];

let check = false;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] === arr[i + 1]) {
    check = true;
    break;
  }
}

if (check) {
  console.log("Adjacent duplicates found");
} else {
  console.log("No adjacent duplicates");
}