// 9. * Create a custom Array.prototype.myPop should work similarly to Array.prototype.pop

function creatMyPopMethod(arr) {
   let result;
   if (Array.isArray(arr)) {
      result = arr[arr.length - 1]
   }
   if (result.length === 0) {
      return undefined
   }
   return result
}

console.log(creatMyPopMethod([1, "2", 5]))