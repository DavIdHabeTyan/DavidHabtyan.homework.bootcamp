// 12. * Create a custom Array.prototype.myPush should work similarly to Array.prototype.push

function myPush(arr, arr1){
   let result = []
   arr1.forEach(elem => {
      result.concat(elem)
   })

   return result
}

console.log(myPush(["1"], ["2", "3"]))