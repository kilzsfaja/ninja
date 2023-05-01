class Ninja {
  constructor(name, health, speed, strength){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }
  sayName(){
    console.log(`This goated ninjas name is ${this.name}`);
  }
  showStats(){
    console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
  }
  drinkSake(){
    this.health += 10;
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

console.log(ninja1)