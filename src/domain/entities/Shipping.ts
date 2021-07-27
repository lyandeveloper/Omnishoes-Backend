import { Address } from './Address';

export interface Shipping {
  name: string;
  fee: number;
  delivery_date?: string;
  expedited?: boolean;
  address?: Address;
}
