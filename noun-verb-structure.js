/*
[x] multiple accounts - Super set

[x] allow withdrawals and deposits
  - subset - transaction
  [x] guard overdraft -- setter - return Error
[x] print transaction history (out and in)
  - superset method
[x] print current balance
  - method of the Superset
*/




// let balance = 500.00; // should be in an account
// ======================================
// account superset
// ======================================
class Account {
  constructor(accountHolder) {
    this.balance = Number(500).toFixed(2);
    this.accountHolder = accountHolder;
    this.transactionRecords = {};
  }
  printTransactionRecords() {
    console.log('Transaction records: ',this.accountHolder, new Date().toUTCString());
    console.log('---');
    for (const key in this.transactionRecords) {
      if (Object.hasOwnProperty.call(this.transactionRecords, key)) {
        const transaction = this.transactionRecords[key];

        console.log(transaction);
        this.printCurrentBalance();
      }
    }
  }

  withdraw(amount) {
    if (amount < 0) {
      throw Error('must be positive number')
    }
    if (amount > this.balance) {
      throw Error('insufficient funds')
    }
    let newBalance = Number(this.balance) - Number(amount);
    this.balance = newBalance.toFixed(2);
    const withdrawal = new Withdrawal(amount)
    this.transactionRecords[withdrawal.transAcId] = withdrawal;
  }

  deposit(amount){
    if (amount < 0) {
      throw Error('must be positive number')
    }
    let newBalance = Number(this.balance) + Number(amount);
    // console.log('this is new balance---', newBalance)
    this.balance = newBalance.toFixed(2);
    const deposit = new Deposit(amount)
    this.transactionRecords[deposit.transAcId] = deposit;
  }


  printCurrentBalance() {
    console.log(`current balance: ${this.balance} -- ${new Date().toUTCString()}`);
  }


}



// console.log(kleinbergerFriedi.iamSuper());


// ======================================
// withdrawal subset
// [x] allow withdrawals and deposits//- subset - transaction!
// use account name to access the account holders object
// [x] multpiple transactions - func
//  - keeps records
//  - setter w transaction ID
// ======================================

class Withdrawal {

  constructor(amount) {
    this.date = new Date().toUTCString();
    this.transAcId = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    this.amount = Number(amount).toFixed(2);
  }
}


class Deposit {
  constructor(amount) {
    this.date = new Date().toUTCString();
    this.amount = Number(amount).toFixed(2);
    this.transAcId = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  // set amount(amount) {
  //   if (this.amount > 0) {
  //     return this._amount = amount;
  //   }
  // }
  // set commit(account) {

  //   account.balance += this.amount
  //   account.transactionRecords[this.transAcId] = this;
  // }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const kleinbergerFriedi = new Account('Kleinberger, Gottfried');
// const hello = new Account('helloThere');
// console.log(hello);
console.log(kleinbergerFriedi);

kleinbergerFriedi.withdraw(99.00);
kleinbergerFriedi.withdraw(22.00);
// kleinbergerFriedi.withdraw = 99.00; // this is how you would pass a value if the method was a setter
kleinbergerFriedi.deposit(1.99);

console.log(kleinbergerFriedi);

// t1 = new Withdrawal(50.25);
// t1.commit(kleinbergerFriedi);
// console.log('Transaction 1:', t1);

// t2 = new Withdrawal(9.99);
// t2.commit(hello);
// console.log('Transaction 2:', t2);

// console.log('Balance:', balance);



// t3 = new Deposit(999.00);
// t3.commit(kleinbergerFriedi)
// console.log('Transaction 3:', t3);
// // console.log(t3.transAcId);
// console.log(kleinbergerFriedi);
kleinbergerFriedi.printTransactionRecords();
// kleinbergerFriedi.printCurrentBalance();
