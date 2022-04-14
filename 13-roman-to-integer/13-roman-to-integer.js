/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let ans = 0, n = 0;
    for(let i = s.length - 1; i >= 0; i--){
        switch (s.charAt(i)) {
            case 'I' : n = 1; break;
            case 'V' : n = 5; break;
            case 'X' : n = 10; break;
            case 'L' : n = 50; break;
            case 'C' : n = 100; break;
            case 'D' : n = 500; break;
            case 'M' : n = 1000; break;
        }
        if (n * 4 < ans) ans -= n;
        else ans += n;
    }
    return ans;
};