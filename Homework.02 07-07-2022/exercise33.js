// 33. * Create a custom Array.prototype.myFilter should work similarly to Array.prototype.filter

function creatMyFilterMethod(arr, func) {
   let filterArr = [];
   for(let i = 0; i < arr.length; i++){
      const result = func(arr[i], i, arr);
      if(result){
         filterArr.push(arr[i])
      }

   }
   return filterArr
}

let newFilter = creatMyFilterMethod([5, 3, 4, 5, 56,  ],function(acc, val) {
   return acc > val
})
console.log(newFilter)