let arr1 = [1, 2, 3, 4, 2];
let arr2 = [7, 8, 9];

function duplicates(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

// Birinchi massivni tekshirish

if(duplicates(arr1)) {
  console.log("Duplicates found");
}else {
  console.log("Unique elements");
}

// Ikkinchi massivni tekshirish

if(duplicates(arr2)) {
  console.log("Duplicates found");
}else {
  console.log("Unique elements");
}