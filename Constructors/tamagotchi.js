const DigitalPal = function(){
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.outside = false;
    this.houseCondition = 100;
}

DigitalPal.prototype.feed = function() {
    if(this.hungry){
        console.log("yummy!");
        this.hungry = false;
        this.sleepy = true;
    } else{
        console.log("No thanks! I'm full.");
    }
}

DigitalPal.prototype.sleep = function(){
    if(this.sleepy){
        console.log('Zzzzzzz');
        this.sleepy = false;
        this.bored = true;
        this.increaseAge();
    } else {
        console.log("No Way! I'm not tired.");
    }
}

DigitalPal.prototype.play = function(){
    if(this.bored){
        console.log("Let's play!");
        this.bored = false;
        this.hungry = true;
    } else{
        console.log("Not right now. Later?")
    }
}

DigitalPal.prototype.increaseAge = function(){
    this.age ++;
    console.log(`Happy Birthday to me! I am ${this.age} years old`);
}

DigitalPal.prototype.bark = function(){
    console.log("Woof! Woof!");
}

DigitalPal.prototype.goOutside = function(){
    if(!this.outside){
        console.log("Yay! I love the outdoors!");
        this.outside = true;
        this.bark();
    } else{
        console.log("We're already outside...");
    }
}

DigitalPal.prototype.goInside = function(){
    if(this.outside){
        console.log("Do we have to? Fine....");
        this.outside = false;
    } else{
        console.log("We're already inside...");
    }
}

DigitalPal.prototype.meow = function(){
    console.log("Meow! Meow!");
}

DigitalPal.prototype.destroyFurniture = function(){
    if(this.houseCondition > 0){
        this.houseCondition -= 10;
        console.log("BAHAHAHA Tkae that FURNITURE!");
    }
}

DigitalPal.prototype.buyFurniture = function(){
    this.houseCondition += 50;
    console.log("Are you sure about that?");
}

const dog = new DigitalPal;
const cat = new DigitalPal;

dog.play();
dog.feed();
dog.sleep();
dog.goOutside();
dog.bark();
cat.sleep();
cat.meow();