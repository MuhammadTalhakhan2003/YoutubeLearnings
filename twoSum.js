function twoSum(num, target) {
    let store = {};
    for (let i = 0; i < num.length; i++) {
        let complement = target - num[i];


        if (store[complement] !== undefined) {
            return [store[complement], i];
        }

        store[num[i]] = i;
    }
    return [];
}

console.log(twoSum([20, 70, 40, 10], 110)); 
console.log(twoSum([20, 30, 50, 50], 100));
console.log(twoSum([2, 7, 11, 15], 9));
 // o(N)