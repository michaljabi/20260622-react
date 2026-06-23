// type może być prosty, Union i obiektowy
type Money = number;

// tylko obiektowy - nie ma Union (ale jest extends)
export interface Product {
  id: string;
  name: string
  description: string
  category: string
  price: Money
  imgUrl: string
}

// Potem do koszyka:
/*
interface CartItem extends Product {
    quantity: number;
}
*/