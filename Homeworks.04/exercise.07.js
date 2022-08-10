// 07. Shopping Cart
// Create a class Product with properties name, type, and price

class Product{
   constructor(name, type, price) {
      this.name = name;
      this.type = type;
      this.price = price;
   };
}
const products = new Product("Orange", "fruit", 500)
const products1 = new Product("Car", "toys", 650)

class ShoppingCart{
   constructor() {
      this.bag = []
   };
   addProduct = (product) => {
      this.bag.push(product)
      return this.bag
   };

   removeProduct = (product) => {

   };

   totalPrice = () => {
      return this.bag
   };
}

const shoppingCart = new ShoppingCart();
shoppingCart.addProduct(products)
shoppingCart.addProduct(products1)

console.log(shoppingCart.addProduct())
console.log(shoppingCart.totalPrice())
