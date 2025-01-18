let arr = [2, 5, 8, 13];

if (arr.length >= 3) {
  let check = true;
  let k = arr[1] - arr[0];

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== k) {
      check = false;
      break;
    }
  }

  if (check) {
    console.log("Arithmetic progression");
  } else {
    console.log("Not arithmetic progression");
  }
} else {
  console.log("Not arithmetic progression");
}