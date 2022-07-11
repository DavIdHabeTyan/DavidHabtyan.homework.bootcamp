// 12. * Create a custom Array.prototype.myPush should work similarly to Array.prototype.push

Array.prototype.myPush = function(...arr){


   arr.forEach(elem => {
     this[this.length] = elem
   })
}


let arr = [1, 2, 3]
arr.myPush(5)

console.log(arr)