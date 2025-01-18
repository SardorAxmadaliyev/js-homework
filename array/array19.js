// let arr = [3, 4, 5];

// if (arr.length < 3) {
//   console.log("No consecutive ascending");
// } else {
//   let check = false;

//   for (let i = 0; i < arr.length - 2; i++) {
//     if (arr[i + 1] === arr[i] + 1 && arr[i + 2] === arr[i + 1] + 1) {
//       c, 4, 5]heck = true;
//       break;
//     }
//   }

//   if (check) {
//     console.log("Consecutive ascending");
//   } else {
//     console.log("No consecutive ascending");
//   }
// }

let arr = [1, 2, 4];

if (arr.length < 3) {
  console.log("No consecutive ascending");
} else {
  let check = false;

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i + 1] === arr[i] + 1 && arr[i + 2] === arr[i + 1] + 1) {
      check = true;
      break;
    }
  }

  if (check) {
    console.log("Consecutive ascending");
  } else {
    console.log("No consecutive ascending");
  }
}