 //   Big o(n pow(2))             for(i<n) o(n pow 2)           arr[3] =  1   arr[0]=84 ------93 85 90         new catch = 1 --- 44 66 10   0   1  1  2    2 4    3 5   4 6  n-1      
 
 function SelectionSort(arr) {
    if(arr.length === 0) return false;

    let n = arr.length;

    for(let i = 0;i< n-1; i++){
        let min_index = i

        for(let j = i+1 ; j< n;j++ ){
           if(arr[j] < arr[min_index]){
            min_index = j
        
        }
        }
    let temp = arr[i];
    arr[i] = arr[min_index];
    arr[min_index] = temp;
    }
    return arr; 
 }

let original = ([2,90,6,7,20,54,34])
console.log(original)

 let sorted = SelectionSort([2,90,6,7,20,54,34])

 console.log(sorted)