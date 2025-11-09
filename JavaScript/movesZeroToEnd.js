// [0,1,5,3]                => [1,5,3,0]
// [0,0,1,0,3,0,5]          => [1,3,5,0,0,0,0]
// [1,2,3]                   => [1,2,3]
// [0,0,0]                   => [0,0,0]
// []                        => []

// Time Complexity: O(n)
// Space Complexity: O(1)

function moveZerosToEnd(arr) {
let lastnonZeroIndex = 0;

for( let i=0 ; i<arr.length ;i++){
    if(arr[i]!==0){
          
        let temp = arr[i];
        arr[i]= arr[lastnonZeroIndex];
        arr[lastnonZeroIndex]= temp;
        lastnonZeroIndex++;

    }
}
}
let arr = [1,0,2,3];
moveZerosToEnd(arr);
console.log(arr);

