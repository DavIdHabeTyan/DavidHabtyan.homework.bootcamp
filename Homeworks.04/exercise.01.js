// 1. University

//create a class named University.

class University {
   constructor(teacher, student) {
      this.teacher = teacher;
      this.student = student;
   }

   addMember(member) {

   };

   removeMember(member) {

   };

   startLesson() {
      return 24 - this.energy
   };


}


class Teacher extends University {
   constructor(name, age, role, energy = 24 ) {
      super();
      this.name = name;
      this.age = age;
      this.role = role;
      this.energy = energy;
   };

   info() {
      return `${this.name}, ${this.age}, ${this.role}, ${this.energy}`;
   };
}

class Student extends University {
   constructor(name, age, role, energy = 24) {
      super();
   this.name = name;
   this.age = age;
   this.role = role;
   this.energy = energy;
   };

   info() {
      return `${this.name}, ${this.age}, ${this.role}, ${this.energy}`;
   }
}