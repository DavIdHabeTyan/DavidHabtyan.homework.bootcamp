function revers(arr) {
   let result = []
   while (0 < arr.length) {
      result.push(arr.pop())
   }
   return result
}

console.log(revers([1, 2, 3, 4]))