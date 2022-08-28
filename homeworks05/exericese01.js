// Exercise 1. Create an infinite loop
// Create an infinite loop that will not stop the execution of other JS instructions.


let count = 0;

async function infinity() {
   console.log(count++);
   setTimeout(() => {
      return oderInfinity();
   }, 1000)
}

async function oderInfinity() {
   await infinity()
   .then(res => console.log("Hello"));
}

oderInfinity()