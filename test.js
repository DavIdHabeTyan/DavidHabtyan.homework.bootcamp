/*
let arr = [1, 2, 3, 4]
function test(arr, n){

   return arr.slice(-n)
}

console.log(test(arr, 2))


 */

let arr = [1, 2, 3, 4]
function test(arr, n) {
   return arr.slice(0, n)
}

console.log(test(arr, 2))