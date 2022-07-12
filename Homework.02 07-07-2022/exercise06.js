// 6. * Create a custom Array.prototype.myJoin should work similarly to Array.prototype.join
/*
function creatMyJoin(elem, symb) {
   let result = ""
   if(typeof elem === "string"){
      elem.forEach(val => {
       return  result + val + symb
      })
   }
   return result
}

console.log(creatMyJoin("David Habetyan", "//"))

 */

let str = ["David habetyan", "Hayastan"]
console.log(str.join("//"))

