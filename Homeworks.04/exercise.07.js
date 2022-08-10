// 07. Shopping Cart
// Create a class Product with properties name, type, and price

class Product {
   constructor(name, type, price, code) {
      this.name = name;
      this.type = type;
      this.price = price;
      if (typeof code !== "string" && code.length !== 5) {
         throw new Error("Write correct code with 5 numbers ")
      } else {
         this.code = code
      }
   };
}

const products = new Product("Orange", "fruit", 500, "24513");
const products11 = new Product("Car", "toys", 650, "45124");
const products1 = new Product("Car", "toys", 630, "45124");
const products2 = new Product("Apple", "fruit", 350, "48745");
const products3 = new Product("Korona", "drink", 1500, "12456");
const products4 = new Product("Snickers", "candy", 300, "78953");


class ShoppingCart {
   constructor() {
      this.bag = []
   };

   addProduct(product) {
      this.bag.push(product)

   };

   removeProduct(product) {

   };

   totalPrice() {


      // discount if 5 product
      if (this.bag.length >= 5) {
         this.totalPrice = this.bag.reduce((acum, elem) => {
            return acum + elem.price
         }, 0)
         return this.totalPrice - (this.totalPrice * 10) / 100
      } else {
         return this.bag = this.bag.reduce((acum, elem) => {
            return acum + elem.price

         }, 0)
      }

      // gift one product free


   };

   replace(productName, replacementProduct) {

   }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addProduct(products)
shoppingCart.addProduct(products1)
shoppingCart.addProduct(products11)
shoppingCart.addProduct(products2)
shoppingCart.addProduct(products3)
shoppingCart.addProduct(products4)


console.log(shoppingCart.totalPrice())
console.log(shoppingCart)


