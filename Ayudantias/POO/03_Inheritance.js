class BankAccount {
  static accounts = [];

  constructor(balance) {
    this.balance = balance;
    this.account_number = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10)).join('');
    BankAccount.accounts.push(this);
  }

  deposit(amount) {
    this.balance += amount;
    return this;
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("INSUFFICIENT FUNDS");
    }
    return this;
  }

  static print_all_accounts() {
    for (const account of BankAccount.accounts) {
      console.log(`Balance: ${account.balance}`);
    }
  }
}

class CheckingAccount extends BankAccount {
  constructor(balance = 0) {
    super(balance);
  }
}

class SavingAccount extends BankAccount {
  constructor(balance = 0, int_rate = 0.01) {
    super(balance);
    this.int_rate = int_rate;
  }

  yield_interest() {
    if (this.balance > 0) {
      this.balance = this.balance * (1 + this.int_rate);
    } else {
      console.log("Account overdrawn: No interests given");
    }
    return this;
  }

  withdraw(amount, is_early) {
    if (is_early) {
      amount = amount * 1.10;
    }
    if (this.balance - amount > 0) {
      this.balance -= amount;
    } else {
      console.log("INSUFFICIENT FUNDS");
    }
    return this;
  }
}

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.accounts = {
      checking: new CheckingAccount(1000),
      savings: new SavingAccount(1000, 0.05),
    };
  }

  display_account_info() {
    console.log(`Name: ${this.name}
      - Checking Account: ${this.accounts["checking"].account_number} - Balance: ${this.accounts["checking"].balance}
      - Checking Account: ${this.accounts["savings"].account_number} - Balance: ${this.accounts["savings"].balance}`);
    return this;
  }
}

console.log("*".repeat(50));

const sara = new User("Sara Miller", "sara@email.com");

sara.display_account_info();

sara.accounts.checking
  .deposit(100)
  .deposit(200)
  .deposit(400)
  .withdraw(60)
sara.display_account_info();

sara.accounts.savings
  .deposit(10)
  .deposit(20)
  .deposit(40)
  .withdraw(600, true)
sara.display_account_info();

console.log("*".repeat(50));
