// 45. Using from, and Set create a function that is removing duplicates from an array

function removeDuplicate(arr) {
let result = [...new Set(arr)]
   return Array.from(result)
}

console.log(removeDuplicate([12, 3, 54, 6, 3, 6, 5, 5, 12 ]))