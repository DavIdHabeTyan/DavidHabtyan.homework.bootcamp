// 04. Implement the described class hierarchy: the Character class is the parent class for all
// the others. 6 child classes Bowerman, Swordsman, Magician, Daemon, Undead, and
// Zombie inherit from it, setting their own characteristics.

const info = {
   name: "Anna",
   type: "specialist",
   health: 99,
   level: 2,
   attack: 75,
   defense: 25
}


class Character{
   constructor(list) {
      this.name = list.name;
      this.type = list.type;
      this.health = list.health;
      this.level = list.level;
      this.attack = list.attack;
      this.defense = list.defense
   };

}

const character  = new Character(info);


class Bowerman extends Character{
   constructor() {
      super();
   }
}