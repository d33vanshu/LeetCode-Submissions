/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let start = 0;
    let end = x;
    let res;
    while(start <= end){
        let mid = Math.floor(start + (end - start)/2);
        if(mid * mid == x){
            return mid;
        }
        if(mid * mid < x){
            start = mid + 1;
            res = mid;
        } else {
            end = mid - 1;
        }
    }
    return res;
};