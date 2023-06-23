//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

// Base class
class Animal {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  eat(){
    console.log(`${this.name} is eating.`);
  }
  sleep(){
    console.log(`${this.name} is sleeping.`);
  }
}

// Derived class (inherits from Animal)
class Dog extends Animal{
  constructor(name, age, breed){
    super(name, age)
    this.breed = breed;
  }

  // Methods sleep() are inherited from Animal

  // Method eat() is inherited from Animal, but we can override it
  eat(){
    console.log(`${this.name} is eating from the dog bowl.`);
  }

  bark(){
    console.log(`${this.name} says woof!`);
  }
}

class Cat extends Animal{
  constructor(name, age, color, livesLeft = 9){
    super(name, age)
    this.color = color;
    this.livesLeft = livesLeft;
  }

  // Methods eat() and sleep() are inherited from Animal
  meow(){
    console.log(`${this.name} says meow!`);
  }
  lifeLost(){
    this.livesLeft--;
    console.log(`${this.name} lost a life. ${this.livesLeft} remaining.`);
  }
}

const rex = new Dog('Rex', 2, 'Golden Retriever');
const garfield = new Cat('Garfield', 3, 'Black');
const felix = new Cat('Felix', 3, 'Black', 5);

rex.eat(); // Output: Rex is eating.
rex.sleep(); // Output: Rex is sleeping.
rex.bark(); // Output: Rex says woof!

console.log("----------------------");

garfield.eat(); // Output: Garfield is eating.
garfield.sleep(); // Output: Garfield is sleeping.
garfield.meow(); // Output: Garfield says meow!
felix.lifeLost(); // Output: Felix lost a life. 4 remaining.

console.log("----------------------");

console.log(rex.age) // Output: 2
console.log(garfield.age) // Output: 3
console.log(felix.livesLeft) // Output: 4

// rex = garfield // Error: Assignment to constant variable.

