// 10. Create a function that is receiving a number and returns an array which is containing all even digits. Use push method.


function returnEvenDigit(numb) {
   let digit = [];
   let lastNumber;
   while(numb > 0){
      lastNumber = numb % 10;
      if(lastNumber % 2 === 0) {
         digit.push(lastNumber)
      }
      numb = (numb - lastNumber)/10
   }
return digit.reverse();
}

console.log(returnEvenDigit(1234506789))