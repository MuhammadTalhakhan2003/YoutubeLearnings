
let marks = [90]

let first = -Infinity;
let second = -Infinity;
let i;
for(i = 0 ; i<marks.length;i++){
     if(marks[i]> first){
        second =first;
        first =marks[i]
     }
     else if(marks[i]> second && marks[i]< first){
        second = marks[i]
     }
}
if(second === -Infinity){
    console.log("NO Second Max Found", second)
}
else{
    console.log("Second Max Found : ",second)
}

//o(n)