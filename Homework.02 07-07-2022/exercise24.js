//24. -- sort() -- Using sort, Write a JavaScript function to get the max element of an array of numbers

function findMaxNumber(arr) {
   let result = arr.sort((a, b) => a - b)
   return result.at(-1)
}

console.log(findMaxNumber([1, 2, 4, 5, 10, 9]))