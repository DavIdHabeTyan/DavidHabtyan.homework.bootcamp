//18. Using the splice method, create a function which is removing duplicated numbers from a sorted array of numbers

function useSpliceRemoveDuplicateNumber(arr, ...addNumber) {
    arr.splice(2, 0, addNumber)
   let result =  arr.flat(Infinity)
   let sorted = result.sort((a, b) => a - b);
return [...new Set(sorted)]
}

console.log(useSpliceRemoveDuplicateNumber([1, 2, 3, 4], 7, 8, 4, 76, 6, 2, 2, 321, 1, 2, 3,5 ))