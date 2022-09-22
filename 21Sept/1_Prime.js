//1.  For a given number N check if it is prime or not. A prime number is a number which is only divisible by 1 and itself.

let Num = 2;
let isPrime = true;
if(Num == 1){
  isPrime = false;
}
for ( let i=2; i<Num; i++){
  if(Num % i == 0){
    isPrime = false;
  }
}

if( isPrime == true)
console.log(`${Num} is a prime number!`);
else
console.log(`${Num} is not a prime number!!`);

//=============================================================
//function
//-----------
// function isPrime(num) {

//   if(num == 2) 
//     return true;
//     else if(num == 1)
//       return false;
//       else if(num>1){
//   for ( let i = 2; i <num; i++){
//     if(num % i == 0){
//       return false;
//     }
//     else{
//       return true;
//     }
//   }
// }
// }
// console.log(isPrime(2));
