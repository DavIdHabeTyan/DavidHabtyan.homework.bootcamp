//* Create a custom Array.prototype.myToString it should work similarly to Array.prototype.toString

function myToString(elem) {
   if(typeof elem ==="number" || typeof elem === "boolean"){
      return "" + elem;
   }
   if(Array.isArray(elem)) {
   return elem.reduce((aggr,item) => {
      return aggr + " " + item + ", "
   },"")

}
return typeof elem
}


console.log(myToString(4575124))



