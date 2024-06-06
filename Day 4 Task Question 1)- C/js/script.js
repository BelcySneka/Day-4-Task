//c.Sum of all numbers in an array


//Anonymous :

let func = function () {
    
    let ar = [1, 2, 3, 4, 5]
    let sum = ar.reduce(function(a, b){
        return a + b;
    });
    console.log(sum);
  }
  func()


  //IIFE :

(function () {
    let sum = [1, 2, 3, 4].reduce(add, 5);
    function add(accumulator, a) {
      return accumulator + a;
    }
    console.log(sum);
  })()