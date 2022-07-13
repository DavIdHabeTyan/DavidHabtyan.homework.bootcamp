function getUnique(arr) {
   let uniqueArr = [];
   for (let i = 0; i < arr.length; i++) {
      if (uniqueArr.indexOf(arr[i]) === -1) {
         uniqueArr.push(arr[i])
      }
   }
   return uniqueArr
}

console.log(getUnique([1234, 324,  56, 5 ,21, 3, 5, 34]))