function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance];

  this.setBalance = (value) => {
    this.balance = value;
  };

  this.getBalance = () => {
    return this.balance;
  };
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };

  this.updateStatement = (value) => {
    this.statement.push(value);
  };

  this.getStatement = () => {
    return this.statement.slice(0);
  };

  this.deposit = (value) => {
    this.updateStatement(value);
    this.setBalance(this.getBalance() + value);
  }

  this.withdraw = (value) => {
    this.updateStatement(value*-1);
    this.setBalance(this.balance - value);
  }

  this.printStatement = () => {
    const statement = this.getStatement();
    for(let i=0; i<statement.length; i++){
      console.log(`${i+1}. ${statement[i]}`);
    }
  }


}

const checking = new MiniBank(500);

checking.printBalance();
checking.deposit(1000);
checking.printBalance();
checking.withdraw(500);
checking.printBalance();
checking.printStatement();
