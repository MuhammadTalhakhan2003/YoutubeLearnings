function firstNonRepeat(str) {
    if(str.length === 0) return 0;
    
    for(let i = 0 ; i< str.length ; i++){
        let isUnique = true;
       for(let j = 0 ; j< str.length ; j++){
        if(i!==j && str[i] === str[j])
        isUnique = false;
        break
    }
    if (isUnique) {
         return str[i]
    }
   
    }
     return null
}
console.log(firstNonRepeat("Talha"))