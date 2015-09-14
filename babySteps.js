function sum(arr, idx) {
  if (idx >= arr.length) {
    return 0;
  } else {
    return Number(arr[idx]) + Number(sum(arr, idx + 1));
  }
}

console.log(sum(process.argv, 2));