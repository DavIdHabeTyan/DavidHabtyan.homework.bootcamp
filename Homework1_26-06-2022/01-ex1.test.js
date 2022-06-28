describe("1. Find the value that is not being repeated inside the given array.", () => {
   function findNotRepeatedVal(arr) {
      let notRepeatedVal = [];
      for(let i = 0; i < arr.length; i++) {
         let count = 0;
         for(let j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j]) count++
         }
         if(count === 1) notRepeatedVal.push(arr[i]);
      }

      return notRepeatedVal
   }


   test("Test 1.", () => {
      expect(findNotRepeatedVal(["a", "a", "b", "a"])).toEqual(["b"]);
   })

   test('Test 2', () => {
      expect(findNotRepeatedVal(["a", "b", "c", "d", "d", "e", "e"])).toEqual(["a", "b", "c"]);
   })
});