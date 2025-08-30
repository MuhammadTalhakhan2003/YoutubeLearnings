function mergeSort(arr, st = 0, end = arr.length - 1) {
  if (st >= end) return; // base case

  let mid = st + ((end - st) >>1); 

  mergeSort(arr, st, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, st, mid, end);
}

function merge(arr, st, mid, end) {
  let left = [];
  let right = [];

  // copy left part
  for (let i = st; i <= mid; i++) left.push(arr[i]);

  // copy right part
  for (let j = mid + 1; j <= end; j++) right.push(arr[j]);

  let i = 0, j = 0, k = st;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) arr[k++] = left[i++];
    else arr[k++] = right[j++];
  }

  // leftover left
  while (i < left.length) arr[k++] = left[i++];

  // leftover right
  while (j < right.length) arr[k++] = right[j++];
}

// Example
let a = [5, 2, 9, 1, 6, 3];
mergeSort(a);
console.log(a); 