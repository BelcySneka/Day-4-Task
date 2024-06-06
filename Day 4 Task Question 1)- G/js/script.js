//g. Remove duplicates from an 

//Anonymous :

let findDuplicates = function () {
  
    const yourArray = [1, 1, 2, 3, 4, 5, 5]
    let duplicates = []
    const tempArray = [...yourArray].sort() 
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 1] === tempArray[i]) {
        duplicates.push(tempArray[i])
      }
    }
    console.log(duplicates) 
  }
  findDuplicates()


  //IIFE :


(function () {
  
    let numbers = [1, 2, 3, 2, 4, 5, 5, 6];
    
    let duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
    
    console.log(duplicates);
  })()