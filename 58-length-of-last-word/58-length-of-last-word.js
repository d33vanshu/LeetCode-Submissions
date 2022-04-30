/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim().split(" ");
    let p = s[s.length - 1];
    return p.length;
};