export interface Item {
  id: string;
  title: string;
  unit_price: number;
  quantity: number;
  tangible: boolean;
  category?: string;
  venue?: string;
  date?: string;
}
