// 33. * Create a custom Array.prototype.myFilter should work similarly to Array.prototype.filter

Array.prototype.myFilter = function (fun) {
   const filtered = [];

   for (let i = 0; i < this.length; i++) {
      if (fun(this[i])) {
         filtered.push(this[i]);
      }
   }
   return filtered
}
let arr = [2, 3, 4, 5, 76, 12, 54]
const filteredArr =  arr.myFilter(function(elem) {
   if(elem > 5) return elem
});
console.log(filteredArr)