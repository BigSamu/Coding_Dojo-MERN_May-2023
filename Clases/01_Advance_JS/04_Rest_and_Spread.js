// -----------------------------------------------------------------------------
// REST/SPREAD OPERATOR (...)
// -----------------------------------------------------------------------------

const person = {
  firstName: "Billy",
  lastName: "Bob",
  email: "bob@email.com",
  username: "BillyB",
  password: "hmmmmmm",
};

const animals = ["horse", "dog", "fish", "cat", "bird"];

const address = {
  street: "123 Main St",
  city: "Pittsburgh",
  state: "PA",
  zip: "15222",
}

// I) Example 1 -> Expansion (Spread Operator)
const personWithAddress = {...person, ...address};
console.log(personWithAddress);

const personWithAddressPlusCountry = {...person, ...address, country: "USA"};
console.log(personWithAddressPlusCountry);

const personWithAddressNested = {...person, address: address};
console.log(personWithAddressNested);

const personWithAddressNestedPlusCountry = {...person, address: {...address, country: "USA"}};
console.log(personWithAddressNestedPlusCountry);

const newAnimals = [...animals, "lion", "tiger", "bear"];
console.log(newAnimals);

const newAnimals2 = ["lion", "tiger", "bear", ...animals];
console.log(newAnimals2);

const newAnimals3 = ["lion", ...animals, "tiger", "bear"];
console.log(newAnimals3);

const personWithHobbies = {...person, hobbies: ["golf", "hiking", "swimming"]};
console.log(personWithHobbies);

const personWithHobbies2 = {...person, hobbies: [...personWithHobbies.hobbies, "golf", "hiking", "swimming"]};

console.log("----------------------");


// II) Exmaple 2 -> Gathering (Rest Operator)

const { firstName, lastName, ...rest } = person;
console.log(firstName); // Output: Billy
console.log(lastName); // Output: Bob
console.log(rest); // Output: { email: 'bob@email.com', username: 'BillyB', password: 'hmmmmmm' }

console.log("----------------------");

const [firstAnimal, secondAnimal, ...restAnimals] = animals;
console.log(firstAnimal); // Output: horse
console.log(secondAnimal); // Output: dog
console.log(restAnimals); // Output: ['fish', 'cat', 'bird']


console.log("----------------------");

function sum_1(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum_2(1,2,3,4,5)); // Output: 15

function sum_2(a,b,...numbers) {
  let rest = 0;
  for (let num of numbers) {
    rest += num;
  }
  return a+b+rest;
}

console.log(sum_1(1, 2, 3, 4, 5)); // Output: 15
console.log(sum_2(1, 2, 3, 4, 5)); // Output: 15

// ------
