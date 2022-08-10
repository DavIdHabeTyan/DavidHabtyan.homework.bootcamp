class City {
   constructor() {
      this.building = []
   }


}


// ------------------------ Building ------------------
class Building extends City {
   constructor() {
      super();
   }
}


// ------------------------ HOSPITAL ------------------
class Hospital extends Building {
   constructor() {
      super();
      this.cars = []
   }
}


// ------------------------ PoliceDepartment ------------------
class PoliceDepartment extends Building {
   constructor() {
      super();
      this.cars = [];
   }
}


// ------------------------ Car ------------------
class Car {
   constructor() {
   }
}


// ------------------------ PoliceCar ------------------
class PoliceCar extends Car {
   constructor() {
      super();
      this.type = "Police"
   }
}

// ------------------------ AmbulanceCar ------------------
class AmbulanceCar extends Car {
   constructor() {
      super();
      this.type = "Ambulance"
   }
}

const nairi = new Hospital();
const astxik = new Hospital();
const mikaelyan = new Hospital();
const police = new PoliceDepartment();
const city = new City();
const car = new Car();
const policeCar = new PoliceCar();
const ambulanceCar = new AmbulanceCar();
city.buildings = [nairi, astxik, mikaelyan, police];

console.log(city);
console.log(car, policeCar, ambulanceCar)



