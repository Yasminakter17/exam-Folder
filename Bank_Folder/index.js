

class BankAccount{
    static #accoutNumbers = new Set();
    constructor(balance,accoutNumber,ownerName) {
        if(BankAccount.#accoutNumbers.has(accoutNumber)){
            throw new Error("This account number already declared");
        }
            this.accoutNumber=accoutNumber;
            this.balance=balance;
            this.ownerName='Jhon Doe';
            BankAccount.#accoutNumbers.add(accoutNumber)
            // console.log(`A/C No: ${accoutNumber}`);
            // console.log(`Opening Balance: $${balance}`);
    }
  
   
   
    Balance(){
        console.log(`Balance: ${this.balance}`);
    }
    deposit(amount){
             this.balance +=amount;
            console.log(`deposit: ${amount}`);   
    }
    withdraw(amount){
        if( amount <= this.balance){
           this.balance -= amount;
           console.log(`Withdraw: ${amount}`)
        }
         else{
            console.log(`withdraw: ${"Insufficient balance"}`) ; 
        } 
             
    }
    getBalance(amount){
        console.log(`getBalance: ${this.balance}`);
     
    }
    ownerName(){
        console.log(`Owner Name: ${this.ownerName}`);
    }
    displayAccountInfo(){
        console.log(`accoutNumber:  ${this.accoutNumber} `);
        console.log(`ownerName: ${this.ownerName}` );
        console.log(`Balance: ${this.balance}`)
    } 
    br(){
        console.log("===========================")
    } 
}
const account = new BankAccount(1500, 'A/C 1001', "Jhon Doe");
const account2= new BankAccount(3000, 'A/C2 2002');

account.deposit(500);
account.withdraw(4000);
account.getBalance();
account.Balance();
account.br();
account2.Balance();
account2.withdraw(20)
account2.getBalance()
account.br();
account.displayAccountInfo()
account.br();
account2.displayAccountInfo()
