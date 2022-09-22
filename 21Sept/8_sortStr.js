// 8. Given a string str containing only lower case alphabets, the task is to sort it in lexicographically-descending order.
// Ex: Input: str = "pace"
//   Output: "peca”

let str = "pace";

console.log(`Given str : ${str}`);
let sortedStr = str.split("").sort().reverse().join("");
console.log(`Resulting str : ${sortedStr}`);

