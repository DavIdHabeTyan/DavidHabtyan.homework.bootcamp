describe("From the given array of numbers and strings create 2 new arrays, one containing only numbers, another one only strings.", () => {
   function sortNumberAndString(arr) {
      let numberArr = [];
      let stringArr = [];
      arr.forEach(elem => {
         if (typeof elem === 'number') {
            numberArr.push(elem);
         } else {
            stringArr.push(elem)
         }

      })
      return [numberArr, stringArr]
   }


   test('Test 1', () => {
      expect(sortNumberAndString([1, 2, 3, 4, "Jon", "David", "Maria", 55, 77])).toEqual([[1, 2, 3, 4, 55, 77], ['Jon', 'David', 'Maria']])

   })
})