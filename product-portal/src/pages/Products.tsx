import { productsResource } from "../products/products-resource";
import { ProductCard } from "../products/ProductCard.tsx";
import type { Product } from "../products/product.ts";
import { useState, useEffect } from "react";

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    console.log("Pierwszy render");

    productsResource
      .getAll()
      .then((value) => setProducts(value))
      .catch((err) => console.error(err));

    return () => {
      console.log("Po ostatnim renderze, komponent usunięty");
    };
  }, []);

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <p className="text-sm text-zinc-500">
          Pick something nice and add it to your cart.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
