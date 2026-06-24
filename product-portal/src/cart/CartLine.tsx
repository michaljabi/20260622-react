import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "../shared/Button";
import type { CartItem } from "./cart-item";
import { useCartStore } from "./cartStore";

interface CartLineProps {
  item: CartItem;
}

export function CartLine({ item }: CartLineProps) {

  const cartStore = useCartStore();

  return (
    <div className="flex items-center gap-4 py-4">
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
        <img
          src={item.imgUrl}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-medium">{item.name}</h3>
        <p className="text-sm text-zinc-500">${item.price} each</p>
      </div>

      <div className="flex items-center gap-1">
        <Button onPress={() => {}}>
          <Minus size={16} />
        </Button>
        <span className="w-8 text-center tabular-nums">{item.quantity}</span>
        <Button>
          <Plus size={16} />
        </Button>
      </div>

      <span className="w-20 text-right font-semibold tabular-nums">
        ${item.price * item.quantity}
      </span>

      <Button onPress={() => cartStore.remove(item.id)}>
        <Trash2 size={16} />
      </Button>
    </div>
  );
}
