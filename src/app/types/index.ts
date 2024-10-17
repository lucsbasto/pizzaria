export type Topping = {
  image: string;
  name: string;
  price: number;
};

export type Pizza = {
  id: number;
  name: string;
  description: string;
  image: string;
  priceSm: number;
  priceMd: number;
  priceLg: number;
  toppings: Topping[];
};