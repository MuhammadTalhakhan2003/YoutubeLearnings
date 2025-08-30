function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;   // left child
  let right = 2 * i + 2;  // right child

  // If left child is larger
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]; // swap

    
    heapify(arr, n, largest);
  }
}

function heapSort(arr) {
  let n = arr.length; 
      
  // Step 1: Build Max Heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

 
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];  
    heapify(arr, i, 0); // heapify reduced heap
  }

  return arr;
}

// Test
let array = [54, 5, 1, 23, 90, 45, 30];
console.log("Original Array:", array);

let sortedArray = heapSort([54, 5, 1, 23, 90, 45, 30]);   // use copy
console.log("Sorted Array:  ", sortedArray);
