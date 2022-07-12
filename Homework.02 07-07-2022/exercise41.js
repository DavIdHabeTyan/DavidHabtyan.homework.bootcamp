// 41. Write a function which is checking if a given element contains inside an array

function isCheckElementAnArray(arr, elem) {
   return arr.indexOf(elem) >= 0

}

console.log(isCheckElementAnArray([1, 2, 3, 4, 5, 6, 7], 5))