/*
let arr = [1, 2, 3, 4]
function test(arr, n){

   return arr.slice(-n)
}

console.log(test(arr, 2))


 */

const data = [1, 2, 3, 4, 5];

Array.prototype.myCustomFilter = function (fn) {
   const filtered = []; // it will receive all values that match to condition passed in fn callback.

   for (let i = 0; i < this.length; i++) {
      if (fn(this[i])) {
         filtered.push(this[i]);
      }
   }

   return filtered;
};

const filteredData = data.myCustomFilter(function (el) {
   if (el < 2) return el;
});

// using arrow function
// const filteredData = data.myCustomFilter(el => el > 2);

console.log(filteredData); // output [3,4,5]


