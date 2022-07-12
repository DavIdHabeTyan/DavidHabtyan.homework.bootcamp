// 15. Using concat compute the union of two arrays and then remove all duplicated items if they exist


function concatArrRemoveDuplicate(arr, arr2) {
   let duplicate = arr.concat(arr2);

    let uniqueArr = [];
    for(let elem of duplicate){
       if(uniqueArr.indexOf(elem) === -1) {
          uniqueArr.push(elem)
       }
    }

/*
    const uniqueDuplicate = [...new Set(duplicate)]

*/


   return uniqueArr
}

console.log(concatArrRemoveDuplicate([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 2]))