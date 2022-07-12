// 50. Write a function that will receive the length and the value and will return a pre-filled array

function duplicateElement(number, elem){
   let result = [];
   for(let i = 0; i < number; i++){
      result.push(elem)
   }
   return result
}

console.log(duplicateElement(2, "Bla Bla"))