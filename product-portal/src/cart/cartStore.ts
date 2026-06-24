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

// SINGLE SOURCE OF TRUTH about CART state.

export const useCartStore = create<CartState>()(
  devtools((set) => ({
    items: [],
    add: (product: Product) =>
      set((state) => {
        console.log(product);
        console.log(state);
        const { items } = state;
        const idx = items.findIndex(({id}) => id === product.id)
        if(idx === -1) {
          return { ...state, items: [...state.items, { ...product, quantity: 1 }]}
        }
        return { ...state, items: items.map((item) => {
            if(item.id === product.id) {
              const itemClone = structuredClone(item);
              itemClone.quantity++;
              return itemClone;
              // return {...product, quantity: item.quantity + 1}
            }
            return item
        }) }
      }),
    remove: (itemId: CartItem['id']) => set((state) => ({ ...state, items: state.items.filter(({id}) => id !== itemId)})),
    clear: () => set(() => ({ items: []})),
  })),
);

// Selektory stanu "derived "
export const selectItems = (state: CartState) => state.items;

export const selectTotalItems = (state: CartState) => state.items.reduce((total, { quantity }) => total + quantity, 0);
export const selectTotalPrice = (state: CartState) => state.items.reduce((total, { quantity, price }) => total + quantity * price, 0);
