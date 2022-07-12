//48. Write a function to check whether an `input` is an array or not. Provide 2 different solutions


function isArray(arr) {
  return Array.isArray(arr)
}

console.log(isArray([1, 2, 3, 4]))
console.log(isArray(4512))