describe('5. Create a function that accepts 2 arrays of words and returns the common words from each.', () => {
   function findTeksInArrays(arr, arr1){
      let result = ""
      for(let i = 0; i < arr.length; i++){
         for(let j = 0; j < arr1.length; j++) {
            if(arr[i] === arr1[j]) result += arr[i]
         }
      }
      return result
   }


   test('Test 1.', () => {
      expect(findTeksInArrays(["dog", "cat", "parrot"], ["lizard", "rat", "cat"])).toEqual("cat")

   })
} )