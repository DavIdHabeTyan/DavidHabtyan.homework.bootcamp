//22. Using slice, Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array


let arr = [1, 2, 3, 4]
function test(arr, n){

   return arr.slice(-n)
}

console.log(test(arr, 2))