//47. * Create a custom Array.prototype.myIncludes should work similarly to Array.prototype.includes

function myIncludesMethod(list, searchElem) {
  for(let elem of list){
     if( elem === searchElem) return true
  }
  return false

}

console.log(myIncludesMethod(["Maria", "John", "Anna", 22, 33, 44], "Vardan"))
console.log(myIncludesMethod(["Maria", "John", "Anna", 22, 33, 44], 33))