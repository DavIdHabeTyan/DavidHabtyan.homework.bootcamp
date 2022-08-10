// 04. Implement the described class hierarchy: the Character class is the parent class for all
// the others. 6 child classes Bowerman, Swordsman, Magician, Daemon, Undead, and
// Zombie inherit from it, setting their own characteristics.

const list = {
   name: "Angry",
   type: "Magician",
   health: 100,
   level: 1,

}

const list1 = {
   name: "Sun",
   type: "Zombie",
   health: 100,
   level: 1,

}


class Character {
   constructor(list) {
      if (typeof list.name !== "string" && list.name.length < 2 && list.name.length > 10) {
         throw new Error("Write correct length")
      }else{
         this.name = list.name
      }



      if (!["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"].includes(list.type)) {
         throw new Error("write correct type")
      } else {

         this.type = list.type;
      }



      this.health = list.health;
      this.level = list.level;
      this.attack = list.attack;
      this.defense = list.defense
   };

   levelUp() {
      this.level += 1;
      this.atack += ((this.atack * 20) / 100);
      this.defense += ((this.defense * 20) / 100);
      this.health = 100;
   }
   damage(points){
      if(this.health > 0) {
         this.health -= points.attack * (1 - this.defense / 100)
      }else{
         throw new Error("this person dead")
      }
   }
}



class Bowerman extends Character {
   constructor(list) {
      super(list);
      this.attack = 25;
      this.defense = 25
   };


}

class Swordsman extends Character {
   constructor(list) {
      super(list);
      this.attack = 40;
      this.defense = 10;
   };
}

class Magician extends Character {
   constructor(list) {
      super(list);
      this.attack = 10;
      this.defense = 40;
   };
}

class Daemon extends Character {
   constructor(list) {
      super(list);
      this.attack = 25;
      this.defense = 25;
   };
}

class Undead extends Character {
   constructor(list) {
      super(list);
      this.attack = 40;
      this.defense = 10;
   };
}

class Zombie extends Character {
   constructor(list) {
      super(list);
      this.atack = 10;
      this.defense = 40;
   };
}

const zombie = new Zombie(list)
const bowerman = new Bowerman(list1)

zombie.levelUp();
bowerman.levelUp();
zombie.damage(bowerman);
bowerman.damage(zombie)

console.log(zombie)
console.log(bowerman)