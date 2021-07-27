import { Billing } from './Billing';
import { Customer } from './Customer';
import { Item } from './Item';
import { Shipping } from './Shipping';

export interface CreditCard {
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
