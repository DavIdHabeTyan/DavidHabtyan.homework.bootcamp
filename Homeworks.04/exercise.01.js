// 1. University

//create a class named University.
class UniversityMember {
   constructor(name, age, role, energy = 24) {
      this.name = name;
      this.age = age;
      this.role = role;
      this.energy = energy;
   }

   info() {
      return this;
   }
}

class Student extends UniversityMember {
}

class Teacher extends UniversityMember {
}

class University {
   constructor() {
      this.teachers = [];
      this.students = [];
   }

   addMember(...member) {
      member.forEach(elem => {
         if (elem.role.toLowerCase() === "teacher") {
            this.teachers.push(elem)
         } else if (elem.role.toLowerCase() === "student") {
            this.students.push(elem);
         }
      });
   }

   removeMember(name) {
      let newName = name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
      this.teacher = this.teachers.filter((names) => {
         return names.name !== newName;

      })
      this.students = this.students.filter((names) => {
         return names.name !== newName;
      });
   }

   startLesson() {
      this.teachers.forEach((elem) => {
         elem.energy -= 5;
      });
      this.students.forEach((elem) => {
         elem.energy -= 2;
      });
   };
}

const university = new University();
const ani = new Student("Ani", 21, "student")
const mary = new Student("Mary", 19, "student")
const luna = new Teacher("Luna", 32, "teacher")
const david = new Teacher("David", 33, "teacher")
university.addMember(ani, mary, luna, david)
university.removeMember("david")
university.startLesson()
console.log(university)
