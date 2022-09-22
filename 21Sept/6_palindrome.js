// 6.  Given a string “nitin”, check if it is palindrome or not.

let givenStr = "abc";

let reverseStr = givenStr.split("").reverse().join("");
// console.log(reverseStr);

if(givenStr === reverseStr){
  console.log(`${givenStr} is a palindrome.`);
}else{
  console.log(`${givenStr} is not a palindrome.`);
}




