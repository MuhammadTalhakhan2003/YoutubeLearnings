function RemoveDuplicates(array){
if(array.length === 0 ) return 0;
let unique = [];
for (let i = 0; i < array.length; i++) {
    let duplicate = false;
    for (let j = 0; j < array.length; j++) {
        if (array[i]===unique[j]) {
         
        duplicate = true;
        break;   
        }
    }
    if(!duplicate){
    unique[unique.length] = array[i];
}
}
return unique;
}


console.log(RemoveDuplicates("RAAJA"))
