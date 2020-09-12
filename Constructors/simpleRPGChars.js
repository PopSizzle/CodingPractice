function Character(name, profession, age, strength, hp){
    this.name = name;
    this.profession = profession;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
}

Character.prototype.printStats = function(){
    console.log(`Name: ${this.name},
        Profession: ${this.profession},
        Age: ${this.age},
        Strength: ${this.strength},
        Hit Points: ${this.hp}`); 
};

Character.prototype.isAlive = function(){
    return this.hp > 0 ? true : false;
}

Character.prototype.attack = function(enemy){
    enemy.hp = enemy.hp - this.strength;
    this.printStats();
    enemy.printStats();
}

const conan = new Character('Conan', 'Barbarian', 25, 100, 150);
const spider = new Character('Arachnid', 'Spider', 4, 50, 30);

console.log(conan);
console.log(spider);

conan.printStats();
spider.printStats();

conan.attack(spider);