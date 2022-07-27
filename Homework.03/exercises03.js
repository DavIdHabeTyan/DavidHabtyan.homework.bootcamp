// 03. Using the constructor function create, an object and methods to support the following functionality

function Calculator(val) {
   this.val = val;
   this.plus = function (plusNumb) {
       this.val = this.val + plusNumb;
   }
   this.minus = function (minusNumb) {
       this.val = this.val - minusNumb;
   }
   this.multiply = function (multiplyNumb) {
       this.val = this.val * multiplyNumb;
   }
   this.divide = function (divideNumb) {
       this.val = this.val / divideNumb;
   }
   this.getResult = function () {
      return this.val
   }
}

const calculator = new Calculator(0);
calculator.plus(5);
calculator.minus(3);
calculator.multiply(3);
calculator.divide(2);
console.log(calculator.getResult())
