// <User>
// 1) Class Attribute
// - ...
// 2) Intance Attributes
//  - name
//  - email
//  - accounts[] -> [<account_1>, <account_2>, <account_3>] -> (COMPOSITION)
// 3) Instance Methods
// - make_deposit(amount, accountNumber)
// - make_withdrawal(amount, accountNumber)
// - display_user_info()
// - transfer_money(other_user, amount)
// - ????
// 4) Class Methods
// - None

// <Bank Account>
//  1) Class Attribute
//  - accounts
//  2) Intance Attributes
//   - balance
//   - account_number
//  3) Instance Methods
//  - deposit(amount)
//  - withdraw(amount)
//  - display_account_info()
//  4) Class Methods
//  - print_all_accounts_info()

// Bank Account Class
class BankAccount {
  // I.1) Class Attribute
  static accounts = [];

  // II) Class Constructor
  constructor(balance = 0) {
    // I.2) Instance Attributes
    this.balance = balance;
    this.account_number = Math.random().toString().slice(2, 12); // 10 digits random number
    // III.3) Others
    BankAccount.accounts.push(this);
  }
  // III) Methods
  // III.1) Instance Methods
  deposit(amount) {
    this.balance += amount;
    return this;
  }

  withdraw(amount) {
    if(this.has_enough_funds(amount)){
      this.balance -= amount;
    }
    return this;
  }

  has_enough_funds(amount) {
    if (this.balance - amount < 0) {
      console.log(`Insufficient funds for taking $${amount} from account ${this.account_number}`);
      return false;
    } else {
      return true;
    }
  }

  get_account_info() {
    return `Account: ${this.account_number} - Balance: $${this.balance}`;
  }
}

// User Class
class User {
  // I) Class Constructor
  constructor(name, email_address = "no_email_given", number_of_accounts = 1) {
    // I.2) Instance Attributes
    this.name = name;
    this.email = email_address;
    this.accounts = []; // I suppose that user start with $0 in balance
    // III.3) Others
    for (let i = 0; i < number_of_accounts; i++) { // Create at least 1 account and push it in accounts array
      this.accounts.push(new BankAccount());
    }
  }

  // III) Methods
  // III.1) Instance Methods
  make_deposit(amount, account) {
    // need a function for retrieving the account
    this.get_account(account.account_number).deposit(amount, this.name);
    console.log(`${this.name} deposited $${amount} in account ${account.account_number}`);
    return this;
  }

  make_withdrawal(amount, account) {
    this.get_account(account.account_number).withdraw(amount,this.name);
    console.log(`${this.name} withdrew $${amount} from account ${account.account_number}`);
    return this;
  }

  transfer_money(amount, origin_account, target_user, destination_acount) {
    if(origin_account.has_enough_funds(amount)){
      origin_account.withdraw(amount);
      destination_acount.deposit(amount);
      console.log(`${this.name} transfered $${amount} from account ${origin_account.account_number} to ${target_user.name} account ${destination_acount.account_number}`);
    }
    return this;
  }

  display_user_info() {
    let output = `User: ${this.name}`;
    for (const account of this.accounts){
      output += `\n - ${account.get_account_info()} `;
    }
    console.log(output);
    return this;
  }


  get_account(accountNumber) { // return a Bank_Account instance located in array accounts[] from User instance
    for (const account of this.accounts){
      if(account.account_number == accountNumber){
        return account; // return instance of Bank_Account Class
      }
    }
  }
}

console.log("*".repeat(50));

const guido = new User("Guido van Rossum", "guido@python.com", 2);
const monty = new User("Monty Python", "monty@python.com");

const guido_account_1 = guido.accounts[0];
const guido_account_2 = guido.accounts[1];
const monty_account_1 = monty.accounts[0];


guido.display_user_info();
guido.make_deposit(100, guido_account_2);
guido.display_user_info();

console.log("*".repeat(50));

monty.display_user_info();
monty.make_deposit(100, monty_account_1)
monty.display_user_info();
monty.make_withdrawal(150, monty_account_1);
monty.display_user_info();

console.log("*".repeat(50));

guido.display_user_info();
monty.display_user_info();
guido.transfer_money(50, guido_account_2, monty, monty_account_1);
guido.display_user_info();
monty.display_user_info();

console.log("*".repeat(50));

console.log("*".repeat(50));

guido.display_user_info();
monty.display_user_info();
guido.transfer_money(50, guido_account_1, monty, monty_account_1);
guido.display_user_info();
monty.display_user_info();

console.log("*".repeat(50));
