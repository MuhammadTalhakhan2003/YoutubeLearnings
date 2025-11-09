//[0,1,3]
/* A | B | A XOR B
   --|---|--------
   0 | 0 | 0
   0 | 1 | 1
   1 | 0 | 1
   1 | 1 | 0  
   */
function missingNumberXor(nums) {
 let n = nums.length;
 let xor = 0;

 for(let i = 0; i < n; i++) {
   xor = xor ^ i ^ nums[i];


 }
    return xor ^ n;

}

console.log(missingNumberXor([0,1,3])); //2
console.log(missingNumberXor([9,6,4,2,3,5,7,0,1]));//8

// Time Complexity: O(n)
// Space Complexity: O(1)