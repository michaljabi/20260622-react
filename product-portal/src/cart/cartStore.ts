import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { Product } from "../products/product";
import type { CartItem } from "./cart-item";

interface CartState {
  items: CartItem[];

  add: (product: Product) => void;
  remove: (id: Product["id"]) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>()(
  devtools((set) => ({
    items: [],
    add: (product) =>
      set((state) => {
        console.log(product);
        console.log(state);
        return { items: [] };
      }),
    remove: (id) => {
        console.log(id);
    },
    clear: () => {},
  })),
);

// Selektory stanu "derived "
export const selectItems = (state: CartState) => state.items;

export const selectTotalItems = (state: CartState) => 0;
export const selectTotalPrice = (state: CartState) => 0;
