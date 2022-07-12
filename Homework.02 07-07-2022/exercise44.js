// 44. Using from, write a JavaScript function to clone an array


function cloneArray(arr) {
   let result = Array.from(arr)
   return result
}

console.log(cloneArray([1, 2, 3, 4, 5, "David"]))