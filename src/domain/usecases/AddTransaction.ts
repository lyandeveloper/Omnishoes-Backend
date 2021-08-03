import { Billing } from '../entities/Billing';
import { Transaction } from '../entities/Transaction';
import { Customer } from '../entities/Customer';
import { Item } from '../entities/Item';
import { Shipping } from '../entities/Shipping';

export interface AddTransactionModel {
  amount: number;
  card_number: string;
  card_cvv: string;
  card_expiration_date: string;
  card_holder_name: string;
  customer: Customer;
  billing: Billing;
  shipping: Shipping;
  item: Item[];
}

export interface AddTransaction {
  add(transaction: AddTransactionModel): Promise<Transaction>;
}
