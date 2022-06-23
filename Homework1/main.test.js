



describe('1. Write a function that checks if the number is palindrome(121, 23432), dont use strings, and work with numbers. STRING))',  () => {
   function palindrome(numb){
      let number = numb;
      let lastNumber;
      let result = '';
      while(number > 0) {
         lastNumber = number % 10;
         result += lastNumber;
         number = (number - lastNumber) /10
      }
      return numb === +result
   }

   test('Test 1. check number 121', () => {
      expect(palindrome(121)).toEqual(true);
   })
   
   test('Test 2. check number 23432', () => {
      expect(palindrome(23432)).toEqual(true);
   })

   test('Test 3. check number 122', () => {
      expect(palindrome(122)).toEqual(false);
   })

 });




describe('1. Write a function that checks if the number is palindrome(121, 23432), dont use strings, and work with numbers.', () => {
   function revers (numb) {
      let number = numb;
      let reversNUmb = 0;
      while (number > 0) {
         reversNUmb *= 10;
         reversNUmb += number % 10;
         number -= number % 10;
         number /= 10;
      }
      return reversNUmb === numb
   }

   test('Test 1.', () => {
      expect(revers(121)).toEqual(true)
   });

   test('Tets 2.', () => {
      expect(revers(23432)).toEqual(true)
   })


});