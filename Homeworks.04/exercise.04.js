// 04. Implement the described class hierarchy: the Character class is the parent class for all
// the others. 6 child classes Bowerman, Swordsman, Magician, Daemon, Undead, and
// Zombie inherit from it, setting their own characteristics.

const info = {
   name: "Anna",
   type: "Magician",
   health: 99,
   level: 2,
   attack: 75,
   defense: 25
}


class Character{
   constructor(list) {
      if(typeof list.name === "string" && list.name.length > 2 && list.name.length <= 10) {
         this.name = list.name
      }else {
         throw new Error("write correct name")
      }

      if(["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"].includes(list.type)){
         this.type = list.type;
      }else {
         throw new Error("write correct type")
      }


      this.health = list.health;
      this.level = list.level;
      this.attack = list.attack;
      this.defense = list.defense
   };

}

const character  = new Character(info);
console.log(character)

class Bowerman extends Character{
   constructor(list) {
      super(list);
   };
}

class Swordsman extends Character{
   constructor(list) {
      super(list);
   };
}

class Magician extends Character{
   constructor(list){
      super(list);
   };
}

class Daemon extends Character{
   constructor(list) {
      super(list);
   };
}

class Undead extends Character{
   constructor(list) {
      super(list);
  };
}

class Zombie extends Character{
   constructor(list) {
      super(list);
   };
}

