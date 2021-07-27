export interface Customer {
  name: string;
  email: string;
  external_id: string;
  type: string;
  country: string;
  birthday?: string;
  phone_numbers: string[];
  documents?: Document[];
}
