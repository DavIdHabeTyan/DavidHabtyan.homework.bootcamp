//16 . * Create a custom Array.prototype.myConcat should work similarly to Array.prototype.concat

function myConcatMethod(arr, ...otherArr){
   for(let elem of otherArr){
      arr.push(elem)
   }
   return arr.flat(Infinity)
}

console.log(myConcatMethod(["1", 2, 3], [ "David", 5, 6], [ 7, 8, 9]))