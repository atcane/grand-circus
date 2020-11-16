class BankAccount {
    constructor(balance, interestRate){
        this.balance = balance;
        this.interestRate = interestRate;
        this.addInterest = this.addInterest
    }

    addInterest () {
        this.balance = this.balance + (this.interestRate * this.balance)
    }
}

class BankAccountWithFee extends BankAccount {
constructor(balance, interestRAte, fee) {
    super(balance, interestRate);
    this.fee = fee;
}

applyFee() {
    this.balance = this.balance - this.fee;
}
}

