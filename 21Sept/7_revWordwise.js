// 7. Given a String S, reverse the string without reversing its individual words. Words are separated by dots.
// Input: S = i.like.javascript.very.much
// Output: much.very.javascript.like.i

let str = "i.like.javascript.very.much";

console.log(str.split(".").reverse().join("."));