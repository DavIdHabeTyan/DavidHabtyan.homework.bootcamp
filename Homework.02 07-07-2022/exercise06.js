// 6. * Create a custom Array.prototype.myJoin should work similarly to Array.prototype.join

function creatMyJoin(elem, symbol) {
let symbolLength = symbol.length

   if (!symbol) {
      let result = elem.reduce((acc, val) => {
         return acc + val + symbol + ","
      }, "")
      return result.slice(0, result.length-1)

   }
   if(symbolLength > 1){
      let result = elem.reduce((acc, val) => {
         return acc + val + symbol + ""
      }, "")
      return result.slice(0, result.length - symbolLength )
   }
   else{
      let result = elem.reduce((acc, val) => {
         return acc + val + symbol + ""
      }, "")
      return result.slice(0, result.length-1)
   }
}

console.log(creatMyJoin(["David", "Habetyan"], ""))






