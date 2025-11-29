/* AND Gate Truth Table
A        B          Output
0        0          0
1        0          0
0        1          0
1        1          1
*/


function AND(a,b){
    return a===1 && b===1 ? 1 : 0;
}
console.log(AND(0,0)); // 0
console.log(AND(1,0)); // 0
console.log(AND(0,1));//  0
console.log(AND(1,1)); // 1

