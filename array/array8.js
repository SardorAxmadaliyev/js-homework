// let arr = [2, 4, 5, 6];
// let juft = 0;
// let toq = 0;

// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] % 2 === 0) {
//     juft += 1;
//   }else {
//     toq += 1;
//   }
// }

// if(juft > toq) {
//   console.log(`Juft: ${juft} ta, Toq: ${toq} ta`);
//   console.log("More even");
// }else {
//   console.log( "Less or equal even");
// }

let arr =  [1, 2, 3, 5];
let juft = 0;
let toq = 0;

for(let i = 0; i < arr.length; i++) {
  if(arr[i] % 2 === 0) {
    juft += 1;
  }else {
    toq += 1;
  }
}

if(juft > toq) {
  console.log(`Juft: ${juft} ta, Toq: ${toq} ta`);
  console.log("More even");
}else {
  console.log(`Juft: ${juft} ta, Toq: ${toq} ta`);
  console.log( "Less or equal even");
}


