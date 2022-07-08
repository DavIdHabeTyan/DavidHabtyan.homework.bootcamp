// 12. * Create a custom Array.prototype.myPush should work similarly to Array.prototype.push

function myPush(arr, arr1) {
   arr1.forEach(elem => {
      arr[arr.length] = elem
   })
   return arr
}

console.log(myPush(["1"], ["2", "3"]))