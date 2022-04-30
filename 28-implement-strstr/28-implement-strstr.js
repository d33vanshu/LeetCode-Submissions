/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let m = haystack.length;
    let n = needle.length;
    
    let left = 0;
    let right = left + n;
    
    while(right <= m){
        let temp = "";
        for(let i = left; i < right; i++){
            temp += haystack[i];
        }
        if(temp == needle){
            return left;
        }
        left++;
        right++;
    }
    return -1;
};