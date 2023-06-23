//------------------------------------------------------------------------------
// CLASSES AND OBJECT INSTANCES
//------------------------------------------------------------------------------

// Object-oriented programming (OOP) is a programming paradigm that organizes
// code around objects, which are instances of classes. OOP focuses on structuring
// code in a way that models real-world objects, their properties (attributes),
// and their interactions (methods).

// Blueprint to create Person objects (instances of the class)
// NOTE: Do not confuse class objects with objects literals

class Person {
  static species = "Homo sapiens"; // Class Atribute
  static totalConnenctions = 0; // Class Attribute

  // Class Constructor
  constructor(name, age) {
    // Instance Attributes
    this.name = name;
    this.age = age;
    this.hobbies = [];
    this.friends = [];
  }

  // Instance Methods
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }

  celebrateBirthday() {
    this.age++;
    console.log(
      `Happy birthday, ${this.name}! You are now ${this.age} years old.`
    );
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
    console.log(`${this.name} added "${hobby}" to their hobbies.`);
  }

  displayHobbies() {
    console.log(`${this.name} likes ${this.hobbies.join(", ")}.`);
  }

  makeFriends(friend) {
    this.friends.push(friend);
    friend.friends.push(this);
    console.log(`${this.name} and ${friend.name} are now friends.`);
  }

  displayFriends() {
    let friends = this.friends.map((friend) => friend.name);
    console.log(
      `${this.name} has ${this.friends.length} friends: ${friends.join(", ")}.`
    );
  }

  // Class Methods
  static getSpecies() {
    console.log(`The species is ${this.species}`);
  }

  static addConnection() {
    this.totalConnenctions++;
  }

  static getTotalConnections() {
    console.log(`Total connections: ${this.totalConnenctions}`);
  }
}

// Creating instances of the Person class
const john = new Person("John", 30);
console.log(typeof john); // Output: object that represents an instance of the class Person
console.log(john); // Output: Person { name: 'John', age: 30 }
console.log(john.name); // Output: John
console.log(john.age); // Output: 30

console.log("----------------------");

john.sayHello(); // Output: Hello, my name is John
john.celebrateBirthday(); // Output: Happy birthday, John! You are now 31 years old.
john.addHobby("Reading"); // Output: John added "Reading" to their hobbies.
john.addHobby("Swimming"); // Output: John added "Swimming" to their hobbies.
john.addHobby("Running"); // Output: John added "Running" to their hobbies.
john.displayHobbies(); // Output: John likes Reading.

console.log("----------------------");

const jane = new Person("Jane", 28);
const mark = new Person("Mark", 35);

john.makeFriends(jane); // Output: John and Jane are now friends.
Person.addConnection(); // Output: Total connections: 1
john.makeFriends(mark); // Output: John and Mark are now friends.
Person.addConnection(); // Output: Total connections: 2

john.displayFriends(); // Output: John has 2 friends: Jane, Mark.
jane.displayFriends(); // Output: Jane has 1 friends: John.
mark.displayFriends(); // Output: Mark has 1 friends: John.

console.log("----------------------");

console.log(Person.species);
Person.getSpecies();
Person.getTotalConnections();

console.log("----------------------");
