// 27. *** Create a custom Array.prototype.mySort should work similarly to Array.prototype.sort
let list = ["Bryant", "Batholomew", "Ritchie", "Kaylyn", "Wilhelmina", "Rouvin", "Flemming", "Sallee", "Roxine", "Arabela"]
let arrNumbers = [4, 32, 65, 657, 23, 4, 6, 567, 65, 87, 9, 3, 234]

function creatMySortMethod(arr) {
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
         if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
         }
      }
   }
   return arr
}

console.log(creatMySortMethod(list))
console.log(creatMySortMethod(arrNumbers))
