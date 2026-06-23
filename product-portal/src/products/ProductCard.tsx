import type { Product } from "./product";
import { Button } from "../shared/Button.tsx";
// import { Cart } from 'lucide-react'

type ProductProps = {
  product: Product;
};

export function ProductCard({ product }: ProductProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="aspect-4/3 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <img
          src={product.imgUrl}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-tight">{product.name}</h3>
          <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 dark:bg-zinc-800">
            {product.category}
          </span>
        </div>
        <p className="text-sm text-zinc-500">{product.description}</p>

        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <span className="text-lg font-semibold">${product.price}</span>
          <Button onPress={() => console.log(product)}>Add</Button>
        </div>
      </div>
    </article>
  );
}
