// Soldier
class Soldier {
  constructor(health,strength){
    this.health = health,
    this.strength = strength
  }
  attack(){
     return this.strength
  }
  receiveDamage (damage) {
    
    this.health = this.health - damage
  }
}

// Viking
class Viking extends Soldier{
  constructor(name,health,strength){
    super(health,strength);
    this.strength = strength
    this.name = name
    this.health = health
  }
  receiveDamage (damage) {
    
    this.health = this.health - damage
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    }else{
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return `Odin Owns You All!`
  }
  

}

// Saxon
class Saxon extends Soldier {
  receiveDamage (damage) {
    
    this.health = this.health - damage
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    }else{
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let vikingQ = this.vikingArmy.length;
    let randomVikingNum = Math.random() * this.vikingQ.length;
    let randomViking = Math.floor(randomVikingNum);

    let saxonQ = this.saxonArmy.length;
    let randomSaxonNum = Math.random() * this.saxonQ.length;
    let randomSaxon = Math.floor(randomSaxonNum);
  
    randomSaxon.receiveDamage(randomViking.strength)
    if(randomSaxon <= 0){
     this.saxonArmy[randomSaxon].unshift
    }
    randomViking.receiveDamage(randomSaxon.strength)
    if(randomViking <= 0){
     this.vikingArmy[randomViking].unshift
    }
    return Viking.receiveDamage(Saxon.strength)
  }
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
