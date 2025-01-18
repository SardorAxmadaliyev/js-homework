// let arr = [1, 2, 3, 2, 1];

// let isPalindrome = true;
// for (let i = 0; i < arr.length / 2; i++) {
//   if (arr[i] !== arr[arr.length - 1 - i]) {
//     isPalindrome = false;
//     break;
//   }
// }

// if (isPalindrome) {
//   console.log("Palindrome array");
// } else {
//   console.log("Not palindrome");
// }

// let arr = [5, 5, 5];

// let isPalindrome = true;
// for (let i = 0; i < arr.length / 2; i++) {
//   if (arr[i] !== arr[arr.length - 1 - i]) {
//     isPalindrome = false;
//     break;
//   }
// }

// if (isPalindrome) {
//   console.log("Palindrome array");
// } else {
//   console.log("Not palindrome");
// }

let arr =  [1, 2, 3];

let isPalindrome = true;
for (let i = 0; i < arr.length / 2; i++) {
  if (arr[i] !== arr[arr.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("Palindrome array");
} else {
  console.log("Not palindrome");
}
