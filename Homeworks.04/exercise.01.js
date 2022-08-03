// 1. University

//create a class named University.

class University {
   constructor(teacher, student) {
      this.teacher = teacher;
      this.student = student;
   }

   addMember(member) {
         let newList = [];
         newList.push(member)
      return newList
   };

   removeMember(member) {

   };

   startLesson() {
      return
   };
}

const university = new University();


class UniversityMember{
   constructor(name, age, role, energy = 24){
      this.name = name;
      this.age = age;
      this.role = role;
      this.energy = energy;
   }
   info() {
      return `${this.name}, ${this.age}, ${this.role}, ${this.energy}`
   }
}


class Teacher extends UniversityMember{
   constructor(name, age, role, energy) {
      super(name, age, role, energy);
   }
}

const teacher = new Teacher("David", 32, "Developer")
console.log(teacher)


class Student extends UniversityMember{
   constructor(name, age, role, energy) {
      super(name, age, role, energy);
   }
}

