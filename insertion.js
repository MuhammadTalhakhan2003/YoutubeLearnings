// 23547                23457              //Best Case scenario o(n)        1 2 3 4 5 6     ,Worst Case Scenario o(n pow(2)) nested loop 

function insertionSort(arr) {
    if (arr.length === 0) {
        return false
    }
    for(let i = 1;i<arr.length ; i++){
        let key = arr[i];
        let j = i-1;
        while (j>=0 && arr[j]>key) {
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

let sorted = insertionSort([1,8,5,2,3,0])
console.log(sorted)