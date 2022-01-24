/**
 * Extend the Prime Factorization Program to store all the Prime Factors of a 
 * number n into an array and finally display the output.
 * @param n 
 * @returns It returns the Factors and prime to stored in the array.
 */
function primeFactors(n){
    var factors = [], 
        divisor = 2;
  
    while(n>2){                      // 10 > 2
      if(n % divisor == 0){          //10 % 2 == 0 // 10%5 == 0
         factors.push(divisor);      //[2,4,]
         n= n/ divisor;              // 10 / 2 = 5
      }
      else{
        divisor++;                 // + 2 increment
      }     
    }
    return factors;
  }
  console.log(primeFactors(10));
  console.log(primeFactors(11));
  console.log(primeFactors(13));
  console.log(primeFactors(19));
  console.log(primeFactors(105));