export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }
  getName = (): string => {
    return this.name;
  };
  getBalance = (): number => {
    return this.balance;
  };
  protected setBalance = (value: number) => {
    this.balance = value;
  };
  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.setBalance(this.balance + value);
      console.log(
        `Depósito realizado com sucesso! Saldo atual: R$ ${this.balance}`
      );
    }
  };
  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (this.validateWithdraw(value)) {
        this.setBalance(this.balance - value);
        console.log(
          `Saque realizado com sucesso! Saldo atual: R$ ${this.balance}`
        );
      }
    }
  };
  private validateWithdraw = (value: number): boolean => {
    if (this.balance >= value) {
      return true;
    }
    console.log("Saldo insuficiente.");
    return false;
  };
  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }
    console.log("Conta inativa.");
    return false;
  };
}
