// Exercise 3 Abstract class

class Abstract {
   constructor() {
      if (this.constructor.name === "Abstract") {
         throw new Error("Abstract class cannot be instanced");
      }
   }
}

class Substract extends Abstract {
   constructor() {
      super();
      this.type = "substract"
   }
}

let sub = new Substract()
console.log(sub);
console.log(sub.constructor.name)