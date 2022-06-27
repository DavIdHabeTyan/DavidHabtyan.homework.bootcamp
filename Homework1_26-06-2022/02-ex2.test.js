describe('Find the smallest and the largest number from the supplied numeric array. Return an array containing these numbers։', () => {
   function findMaxAndMinNumber(arr) {
      let newArr = []
      let maxElem = 0;
      let minElem = 10;
      for (let i = 0; i < arr.length; i++) {
         if (arr[i] > maxElem) maxElem = arr[i];
         if (arr[i] < minElem) minElem = arr[i]
      }
      newArr.push(minElem, maxElem)
      return newArr
   }

   test('Test 1.', () => {
      expect(findMaxAndMinNumber([14, 28, 3, 8, 2])).toEqual([2, 28])
   })

})