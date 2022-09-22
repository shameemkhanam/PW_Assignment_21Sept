//3.  You are given an array A of size N. You need to print elements of A in alternate order (starting from index 0).

let arr = [21,45,32,66,56];
for ( let i = 0; i< arr.length; i++){
  if(i % 2 == 0){
    console.log(arr[i]);
  }
}