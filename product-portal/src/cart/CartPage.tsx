import { Link } from "react-router";
import { ArrowLeft, ShoppingCart, Trash2 } from "lucide-react";
import { CartLine } from "./CartLine.tsx";
import { Button } from "../shared/Button.tsx";
import type { CartItem } from "./cart-item.ts";
import { useCartStore, selectItems, selectTotalPrice, selectTotalItems } from "./cartStore.ts";

export function CartPage() {
  const cartStore = useCartStore();
  const items: CartItem[] = useCartStore(selectItems);
  const totalItems = useCartStore(selectTotalItems);
  const totalPrice = useCartStore(selectTotalPrice);

  if (items.length === 0) {
    return (
      <section className="flex flex-col items-center justify-center gap-4 py-24 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-400 dark:bg-zinc-800">
          <ShoppingCart size={28} />
        </span>
        <div>
          <h1 className="text-xl font-semibold">Your cart is empty</h1>
          <p className="text-sm text-zinc-500">
            Browse the products and add a few items.
          </p>
        </div>
        <Link to="/">
          <Button>
            <div className="flex items-center gap-2">
              <ArrowLeft size={16} /> Continue shopping
            </div>
          </Button>
        </Link>
      </section>
    );
  }

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <Button onPress={cartStore.clear}>
          <div className="flex items-center gap-2">
            <Trash2 size={16} /> Clear cart
          </div>
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white px-4 dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900">
          {items.map((item) => (
            <CartLine key={item.id} item={item} />
          ))}
        </div>

        <aside className="h-fit rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="font-semibold">Order summary</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between text-zinc-500">
              <dt>Items</dt>
              <dd className="tabular-nums">{totalItems}</dd>
            </div>
            <div className="flex justify-between text-zinc-500">
              <dt>Subtotal</dt>
              <dd className="tabular-nums">${totalPrice}</dd>
            </div>
            <div className="flex justify-between text-zinc-500">
              <dt>Shipping</dt>
              <dd>Free</dd>
            </div>
            <div className="my-3 border-t border-zinc-200 dark:border-zinc-800" />
            <div className="flex justify-between text-base font-semibold">
              <dt>Total</dt>
              <dd className="tabular-nums">${totalPrice}</dd>
            </div>
          </dl>
          <Link
            to="/"
            className="mt-3 flex items-center justify-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
          >
            <ArrowLeft size={14} /> Continue shopping
          </Link>
        </aside>
      </div>
    </section>
  );
}
