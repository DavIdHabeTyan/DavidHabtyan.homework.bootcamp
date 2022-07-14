// 6. * Create a custom Array.prototype.myJoin should work similarly to Array.prototype.join



function creatMyJoin(elem, symbol) {

   let result = elem.reduce((acc, val) => {
      return acc + symbol + val
   })
   return result
}

console.log(creatMyJoin(["David", "Habetyan"], " "))




