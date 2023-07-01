// <User>
//  1) Class Attribute
//  - all_users
//  2) Intance Attributes
//  - name
//  - email address
//  - account_balance
//  3) Instance Methods
//  - make_deposit(amount)
//  - make_withdrawal(amount)
//  - transfer_money(other_user, amount)
//  - has_enough_funds(amount)
//  - display_user_balance()
//  4) Class Methods
//  - list_users()

// Class Definition
class User {
  // I.1) Class Attribute
  static all_users = [];

  // II) Class Constructor
  constructor(name, email_address = "no_email_given") {
    // I.2) Instance Attributes
    this.name = name;
    this.email = email_address;
    this.account_balance = 0; // I suppose that user start with $0 in balance
    // III.3) Others
    User.all_users.push(this); // Every time I create a user I want to add it to the list of all_users

    // NOTE: "this" is a keyword that makes reference to the instance of the class
  }

  // III) Methods
  // III.1) Instance Methods
  make_deposit(amount) {
    this.account_balance += amount;
    console.log(`${this.name} deposited $${amount}`);
    return this;
  }

  make_withdrawal(amount) {
    if (this.has_enough_funds(amount)) {
      this.account_balance -= amount;
      console.log(`${this.name} withdrew $${amount}`);
    }
    return this;
  }

  transfer_money(amount, target_user) {
    if (this.has_enough_funds(amount)) {
      this.account_balance -= amount;
      target_user.account_balance += amount;
      console.log(`${this.name} transfered $${amount} to ${target_user.name}`);
    }
    return this;
  }

  has_enough_funds(amount) {
    if (this.account_balance - amount < 0) {
      console.log(`${this.name} has insufficient funds to take $${amount} from her account`);
      return false;
    } else {
      return true;
    }
  }

  display_user_balance() {
    console.log(`User: ${this.name} - Balance: $${this.account_balance}`);
  }
  // III.2) Class Methods
  static print_all_users() {
    let output = "";
    for (const each of User.all_users) {
      output += `${each.name}, `;
    }
    console.log(`List of users: ${output.slice(0, output.length - 2)}`);
  }
}

console.log("*".repeat(50));

const guido = new User("Guido van Rossum", "guido@python.com");
const monty = new User("Monty Python");
guido.display_user_balance();
monty.display_user_balance();

console.log("*".repeat(50));
guido.make_deposit(100).make_deposit(200); // chaining methods
guido.display_user_balance();
monty.make_deposit(50).make_withdrawal(10).make_withdrawal(80);
monty.display_user_balance();

console.log("*".repeat(50));

guido.display_user_balance();
monty.display_user_balance();
guido.transfer_money(50, monty);
guido.display_user_balance();
monty.display_user_balance();

console.log("*".repeat(50));

guido.display_user_balance();
monty.display_user_balance();
monty.transfer_money(500, guido);
guido.display_user_balance();
monty.display_user_balance();

console.log("*".repeat(50));

User.print_all_users();

console.log("*".repeat(50));
