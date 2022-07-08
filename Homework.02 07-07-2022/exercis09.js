// 9. * Create a custom Array.prototype.myPop should work similarly to Array.prototype.pop

function creatMyMethodPop(arr) {
   let result = []

   if(Array.isArray(arr)) {
      for(let i = arr.length - 1; i >= 0; i--) {
         result.push(arr[i])
         break;
      }
      if(result.length === 0){
         return undefined
      }
   }
   return result

   
}


console.log(creatMyMethodPop(["dasdfa", "asdasdsad", "asdasdsad"]))