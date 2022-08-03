// 2. CoffeeShop

//Create a constructor CoffeeShop, which has three properties
import {menuList} from "./shopMenueExercise02.js";

function CoffeeShop(name, menu) {
   this.name = name;
   this.menu = menu; // {name: bear, price: 5}
   this.orders = [];

   this.addOrder = function (addName) {
       this.menu.find(elem => {
         return elem.name === addName
      })
      if (addName) {
         this.orders.push(addName)
      }
      return "This item is currently unavailable!"
   };


   this.fulfillOrder = () => {
      if (this.orders.length > 0) {
         return `The ${this.orders[0]} is ready`
      }
      return `All orders have been fulfilled!`;
   };

   this.listOrders = () => {
      return this.orders
   };
///// this block is wrong ?
   this.dueAmount = () => {

   }

   this.cheapestItem = () => {
      let arr = []
      this.menu.filter(minPrice => arr.push(minPrice.price))
      return Math.min(...arr)
   }

   this.drinksOnly = () => {
      return this.menu.filter(drinks => {
         return drinks.type === "drink"
      }).map(elem => elem.name)
   }

   this.foodOnly = () => {
      return this.menu.filter(food => {
         return food.type === "food"
      }).map(elem => elem.name)

   }
}

const coffeeShop = new CoffeeShop("Fast Food", menuList);
console.log(coffeeShop.addOrder("barbecue"))
console.log(coffeeShop.fulfillOrder())
console.log(coffeeShop.listOrders())
console.log(coffeeShop.dueAmount())
console.log(coffeeShop.cheapestItem())
console.log(coffeeShop.drinksOnly())
console.log(coffeeShop.foodOnly())
