//2.  Given a positive integer, N. Find the factorial of N.

let Num = 5;
let fact = 1;

if (Num == 1 || Num == 0) {
  console.log(fact);
} else {
  for (Num; Num >=1; Num--){
    fact = fact * Num;
  }
  console.log(fact);
}

//=========================================================

// function fact(num){
//   let fact = 1;
//   if(num==1 || num == 0)
//   return 1;
//   else{
//     for (let i = num; i>=1; i--){
//       fact = fact * i;
//     }
//     return fact;
//   }
// }
// console.log(fact(10));
