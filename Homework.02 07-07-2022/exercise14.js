// 14. * Create a custom Array.prototype.myUnshift should work similarly to Array.prototype.Unshift

/*
Array.prototype.myUnshift = function(...args)  {

   args.forEach(val => {
     this[0] = val
   })
   return args
}

let arr = [1, 2, 3, 4]
arr.myUnshift([1, 2])
console.log(arr)

 */


function creatMyMethodUnshift(arr, input) {
   let result = [...input, ...arr]
   return result
}

console.log(creatMyMethodUnshift([1, 2, 3], [4, 5]))