// 02. Create an object and methods to support the following functionality

const obj = {

   setSum: function(sum){
      this.sum = sum;
   },

   add: function(oderSum){
      this.oderSum = oderSum;
   },
   getSum: function() {
      if(this.sum === 100){
         return this.sum
      }
    return  this.sum + this.oderSum
   }
}
obj.setSum(10);
obj.add(20);
console.log(obj.getSum())
obj.setSum(100)
console.log(obj.getSum())