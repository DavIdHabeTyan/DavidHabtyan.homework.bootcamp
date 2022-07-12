//21.Using slice, Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array

let arr = [1, 2, 3, 4]
function test(arr, n) {
   return arr.slice(0, n)
}

console.log(test(arr, 2))