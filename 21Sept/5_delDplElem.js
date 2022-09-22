// 5. Given a sorted array A[] of size N, delete all the duplicate elements from A[].
// Note: Don't use set or HashMap to solve the problem.

let arr = [4,124,4,4,4];
let newArr = [];
for ( let i of arr){
  if(newArr.indexOf(i) ===-1){
    newArr.push(i);
  }
}
console.log(newArr);

//=================

let arr2 = [4,4,40,4,4];
let newArr2 = [];
for (let i = 0; i < arr2.length; i++) {
  if(newArr2.indexOf(arr[i]) === -1){
    newArr2.push(arr[i]);
  }
  
}
console.log(newArr);