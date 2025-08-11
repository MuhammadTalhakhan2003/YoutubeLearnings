                                    //    0 1     12      2 3      3  4    4  5                              smallest  1     2          3           4               Largest 5..

function sec_Largest_sec_Smallest(arr){
if (arr.length < 2){
    return {
        secondLargest:null,
        secondSmallest:null
    }
}
let largest = arr[0];
let secondLargest =null;

let smallest = arr[0]
let secondSmallest = null;

for(let i = 1;i<arr.length;i++){
    let current = arr[i];
    if(current > largest){
        secondLargest =largest;
        largest = current;

    }
    else if(current<largest &&(secondLargest === null || current> secondLargest)){
        secondLargest =current;
    }
        if(current < smallest){
        secondSmallest =smallest;
        smallest = current;

    }
    else if(current>smallest &&(secondSmallest === null || current < secondSmallest)){
        secondSmallest =current;
    }
}
    return {
        secondLargest:secondLargest,
        secondSmallest:secondSmallest
    };

}


let answer  = sec_Largest_sec_Smallest([1,2,3,4,5,5.6,6.7,7.8,1.5])
console.log(answer)