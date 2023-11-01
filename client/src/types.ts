export interface Product {
  name: string;
  description: string;
  brand: string;
  material: string;
  amount: number;
  price: number;
  _id: string;
  image:string;
}

export interface ProfileProps {
  name: string;
  lastName: string;
  email: string;
  country: string;
  verify: boolean;
  image:any;
  uid:string;
  carrito:[];
  adress:any;
  dni:number;
}
