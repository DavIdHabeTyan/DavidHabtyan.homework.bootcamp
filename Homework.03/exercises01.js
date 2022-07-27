//  1. Create an object and methods to support the following functionality

const obj = {
   setName: function(name) {
     this.name = name
   },
   getName: function() {
      return this.name
   }
}

obj.setName("John")
console.log(obj.getName()); /// "John"









