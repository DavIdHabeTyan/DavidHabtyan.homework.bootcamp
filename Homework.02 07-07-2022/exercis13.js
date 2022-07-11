// 13. * Create a custom Array.prototype.shift should work similarly to Array.prototype.shift


function myShift(arr) {
   for(let i = 0; i < arr.length; i++) {
      return arr[i]
   }

}

console.log(myShift([8, 5, 2, 2]))