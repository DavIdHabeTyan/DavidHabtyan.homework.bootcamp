// 25. Using sort, Write a JavaScript function to get the min element of an array of numbers

function findMinNUmber(arr) {
   let result = arr.sort((a, b) => a-b)
   return result[0]
}

console.log(findMinNUmber([3, 5, 6, 43, 7, 2]))