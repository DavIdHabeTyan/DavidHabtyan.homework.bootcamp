// 07. Shopping Cart
// Create a class Product with properties name, type, and price

class Product {
   constructor(name, type, price) {
      this.name = name;
      this.type = type;
      this.price = price;
   };
}

const products = new Product("Orange", "fruit", 500);
const products11 = new Product("Car", "toys", 650);
const products1 = new Product("Car", "toys", 650);
const products2 = new Product("Apple", "fruit", 350);
const products3 = new Product("Korona", "drink", 1500);
const products4 = new Product("Snickers", "candy", 300);


class ShoppingCart {
   constructor() {
      this.bag = []
   };

   addProduct = (product) => {
      this.bag.push(product)

   };

   removeProduct = (product) => {

   };

   totalPrice = () => {


      if (this.bag.length >= 5) {
         let totalPrice = this.bag.reduce((acum, elem) => {
            return acum + elem.price
         }, 0)
         return totalPrice - (totalPrice * 10) / 100
      } else {
         return this.bag = this.bag.reduce((acum, elem) => {
            return acum + elem.price

         }, 0)
      }
   };
}

const shoppingCart = new ShoppingCart();
shoppingCart.addProduct(products)
shoppingCart.addProduct(products1)
shoppingCart.addProduct(products11)
shoppingCart.addProduct(products2)
shoppingCart.addProduct(products3)
shoppingCart.addProduct(products4)

console.log(shoppingCart.totalPrice())


