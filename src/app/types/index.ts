export type Topping = {
  image: string;
  name: string;
  price: number;
};

export type Pizza = {
  id: string;
  name: string;
  description: string;
  image: string;
  priceSm: number;
  priceMd: number;
  priceLg: number;
  toppings: Topping[];
};

export type CartItem = {
  id: string, 
  image: string, 
  name: string,
  price: number, 
  additionalTopping: Topping[], 
  size: string, 
  crust: string, 
  amount?: number
}