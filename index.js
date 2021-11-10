/*
[] deposit
[] withdraw
[] transaction
[] account - balance - transaction record
  [] print transaction records
*/

class Account {
  constructor(accountName) {
    this.accountName = accountName;
    this.transactions = [];
  };

  get balance() {
    let balance = 0
    for (let t of this.transactions) {
      balance += t.value
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

// transaction super
class Transaction {

  constructor(amount, account) {
    this.amount = amount; //10
    this.account = account; // fk
  }
  commit() {
    // if ()
    this.time = new Date();
    const allowed = this.isAllowed()
    if (allowed) {
      this.account.addTransaction(this);
    }
    return 'insufficient funds';
  }
  // has to return true or false.isAllowed()
  isAllowed() {
    console.log('this is ALLOWED!');
    return true;
  }
}

class Withdraw extends Transaction { // w
  isAllowed() {
    console.log('we are trapped in here, send help')
    if (this.account.balance - this.amount < 0) {
      return false
    }
    return true;
  }
  get value () {
    return  - this.amount
  }
};

class Deposit extends Transaction {
  // isAllowed() {
  //   console.log('this is ALLOWED!');
  //   return true;
  // }
  get value () {
    return this.amount
  }
}


const fk = new Account('Friedi Kleinberger');
console.log('#starting balance', fk.balance);
const t2 = new Deposit(99, fk);
t2.commit()
const t1 = new Withdraw(10, fk);
// console.log(t1.commit(), 'this is the t1 commit()');
t1.commit()
// console.log();


// // console.log(t2);
// t2.commit()
// console.log('#PRINT ACCOUNT', fk);
console.log('#PRINT balance', fk.balance);

// // console.log(this.isAllowed());
console.log(fk);
