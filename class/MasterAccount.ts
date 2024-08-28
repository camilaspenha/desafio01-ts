import { DioAccount } from "./DioAccount";

export class MasterAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number) => {
    if (this.validateStatus()) {
      this.setBalance(this.getBalance() + value + 10);
      console.log(
        `Depósito realizado com sucesso! Saldo atual: R$ ${this.getBalance()}`
      );
    }
  };
}
