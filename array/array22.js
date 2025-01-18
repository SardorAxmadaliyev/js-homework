function tubmi(x) {
  if (x < 2) return false; 
  
  let j = 2;
  while(j * j <= x) {
    if (x % j === 0) {
      return false;
    }
    j += 1;
  }
  return true;
}

let res = [2, 3, 5, 7];
let check = true;

for(let i = 0; i < res.length; i++) {
  if (!tubmi(res[i])) {
    check = false;
    break;
  }
}

if (check) {
    console.log("All prime");
  } else {
    console.log("Not all prime");
  }

// function tubmi(x) {
//   if (x < 2) return false; 

//   let j = 2;
//   while(j * j <= x) {
//     if (x % j === 0) {
//       return false;
//     }
//     j += 1;
//   }
//   return true;
// }

// let res = [2, 4, 5];
// let check = true;

// for(let i = 0; i < res.length; i++) {
//   if (!tubmi(res[i])) {
//     check = false;
//     break;
//   }
// }

// if (check) {
//   console.log("All prime");
// } else {
//   console.log("Not all prime");
// }