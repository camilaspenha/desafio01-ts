/*
DIO Banking
*/

import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { MasterAccount } from "./class/MasterAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1234567, "Camila", 1);
const companyAccount: CompanyAccount = new CompanyAccount("Company", 2);
const masterAccount: MasterAccount = new MasterAccount("Master Account", 3);

console.log("People: ", peopleAccount.getBalance());
console.log("Company: ", companyAccount.getBalance());
console.log("Master: ", masterAccount.getBalance());

peopleAccount.deposit(100);
companyAccount.deposit(100);
masterAccount.deposit(100);

peopleAccount.withdraw(110);
companyAccount.withdraw(110);
masterAccount.withdraw(110);

companyAccount.getLoan(1000);
