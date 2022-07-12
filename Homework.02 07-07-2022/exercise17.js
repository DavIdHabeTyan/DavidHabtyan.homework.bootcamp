// 17. Using the splice method, write a function that will fill the missing numbers of a sorted array of numbers, to make it consecutive.
function fillMissingNUmber(arr) {
   arr.splice(3, 0, 4, 5)
   return arr
}

console.log(fillMissingNUmber([1, 2, 3, 6]))