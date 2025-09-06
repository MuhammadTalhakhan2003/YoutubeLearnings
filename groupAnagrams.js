//  ABC    LEFT-RIGHT+1  TRUST      aacacbc                abcr====r              webig======w      o(N)

function lengthOfLongestSubstring(s){

let freq = {}

let left = 0, maxlength=0;

for(let right = 0; right<s.length;right++){

let char = s[right];

while (freq[char]) {
    delete freq[s[left]];
    left++;
}
freq[char] = true;

maxlength= Math.max(maxlength,right-left+1)


}
return maxlength;

}

let R = lengthOfLongestSubstring("TALH d ")
console.log(R)
