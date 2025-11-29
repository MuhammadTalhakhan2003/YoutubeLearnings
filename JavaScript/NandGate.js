/*
NAND Gate Truth Table
A       B      Output
0       0      1
0       1      1
1       0      1
1       1      0
*/


function NAND(a,b){
     let andResult =a ===1 && b===1 ? 1:0;
     return andResult ===1 ? 0 : 1;

}

console.log(NAND(0,0)); // 1
console.log(NAND(1,0)); // 1
console.log(NAND(0,1)); // 1
console.log(NAND(1,1)); // 0