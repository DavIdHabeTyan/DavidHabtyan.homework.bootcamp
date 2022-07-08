

function myPush(arr, elem) {
   for(let i = 0; i < elem.length; i++) {
      arr[arr.length] = elem[i]
   }
   return arr
}

console.log(myPush([1, 2, 3], ["David Habetyan"]))
