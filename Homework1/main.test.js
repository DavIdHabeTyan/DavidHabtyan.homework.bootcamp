

describe('1. Write a function that checks if the number is palindrome(121, 23432), dont use strings, and work with numbers.',  () => {
   function palindrome(numb){
      let result = ""
      while(0 < numb){
         let lastNumb = numb%10;
         result+=lastNumb;
         lastNumb = (numb % 10) /10;
      }
      return result
   }

   test('test 1.', () => {
      expect(palindrome(121)).toEqual(true);
   })
   
   
 });