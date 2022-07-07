describe('3. From the given array of numbers create two arrays one containing only odd and the other only even numbers', () => {
   function findOddAndEvenNumb(arr) {
      let oddArr = [];
      let evenArr = [];
      for (let i = 0; i < arr.length; i++) {
         if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
         } else {
            oddArr.push(arr[i])
         }
      }
      return [oddArr, evenArr]
   }


   test('Test 1', () => {
      expect(findOddAndEvenNumb([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([[1, 3, 5, 7, 9], [2, 4, 6, 8]])
   })
})