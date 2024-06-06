//d.Return all the prime numbers in an array

//Anonymous:


let prime = function (arr) {
    return arr.filter(function(n){
      for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
      }
      return n > 1;
    });
  };
  console.log(prime([7, 16, 9, 3]));
  

  //IIFE:
(function (){
    var primeNum = [7, 16, 9, 3]
    
    primeNum = primeNum.filter(function(number) {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    
    console.log(primeNum);
    })()