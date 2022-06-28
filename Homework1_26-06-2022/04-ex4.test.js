describe('4. Write a function to return only unique values of the given array.', () => {
   function findUniqueValues(arr) {
      let uniqeValues = [];
      for(let i = 0; i < arr.length; i++) {
         let count = 0;
         for(let j= 0; j < arr.length; j++){
            if(arr[i] === arr[j]) count++
         }
         if(count === 1) uniqeValues.push(arr[i]);
      }
      return uniqeValues
   }

   test('Test 1', () => {
    expect(findUniqueValues(["a", "b", "c", 1, 2, 3, "b", 3, 2])).toEqual(["a", "c", 1])
   })


})