/*
[x] multiple accounts - Super set

[x] allow withdrawals and deposits
  - subset - transaction
  [] guard overdraft -- setter - return Error
[x] print transaction history (out and in)
  - superset method
[x] print current balance
  - method of the Superset
*/




let balance = 500.00; // should be in an account
// ======================================
// account superset
// ======================================
class Account {
  constructor(accountHolder) {
    this.balance = 500.00;
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
      }
    }
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
    this.amount = amount;
    this.transAcId = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

  }

  commit(account) {
    account.balance -= this.amount
    account.transactionRecords[this.transAcId] = this;
  }
}


class Deposit {
  constructor(amount) {
    this.date = new Date().toUTCString();
    this.amount = amount;
    this.transAcId = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  commit(account) {
    account.balance += this.amount
    account.transactionRecords[this.transAcId] = this;
  }
}

class PrintTransactionRecords {

}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const kleinbergerFriedi = new Account('kleinbergerFriedi');
console.log(kleinbergerFriedi);


t1 = new Withdrawal(50.25);
t1.commit(kleinbergerFriedi);
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99);
t2.commit(kleinbergerFriedi);
console.log('Transaction 2:', t2);

console.log('Balance:', balance);



t3 = new Deposit(999.00);
t3.commit(kleinbergerFriedi)
console.log('Transaction 3:', t3);
console.log(t3.transAcId);
console.log(kleinbergerFriedi);
kleinbergerFriedi.printTransactionRecords();
kleinbergerFriedi.printCurrentBalance();
