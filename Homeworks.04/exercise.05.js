class City {
   constructor() {
      this.building = []
   }
   buildings = () => {
      return this.building
   }
}

const city = new City();

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
   }

   addHospital = (name) => {
      this.buildings.push(name)
   }
}

const nairiHospital = new Hospital();

console.log(city.buildings())


// ------------------------ PoliceDepartment ------------------
class PoliceDepartment extends Building {
   constructor() {
      super();
   }
}


// ------------------------ Car ------------------
class Car extends City {
   constructor() {
      super();
   }
}


// ------------------------ PoliceCar ------------------
class PoliceCar extends Car {
   constructor() {
      super();
   }
}
// ------------------------ AmbulanceCar ------------------
class AmbulanceCar extends Car {
   constructor() {
      super();
   }
}


