import { productsResource } from "../products/products-resource";
import { ProductCard } from "../products/ProductCard.tsx";
import type { Product } from "../products/product.ts";
import { useState, useEffect } from "react";

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log("Pierwszy render");

    // Stare (przed 2017 API)
    // productsResource
    //   .getAll()
    //   .then((value) => setProducts(value))
    //   .catch((err) => console.error(err));

    // Nowe API async/await w `useEffect`
    // Ale z referencja
    /*
    const callMe = async () => {
      try {
        const value = await productsResource.getAll();
        setProducts(value);
      } catch (e) {
        console.log(e);
      }
    };
    callMe();
    */

    // Upraszamy do https://developer.mozilla.org/en-US/docs/Glossary/IIFE
    // IFFE arrow + async + odrazu wywołanie
    (async () => {
       try {
        const value = await productsResource.getAll();
        setProducts(value);
      } catch (e) {
        console.log(e);
      }
    })();

    return () => {
      console.log("Po ostatnim renderze, komponent usunięty");
    };
  }, []);

  // A co jak ja chcę mieć info o każdym re-render ?
  useEffect(() => {
    console.log("Jest re-render");
  });

  // A co jak ja chę mieć info o tym że zmieni się errorMessage ?
  useEffect(() => {
    console.log("Zmieniło się error message!", errorMessage);
  }, [errorMessage]);

  return (
    <section>
      <div className="mb-6">
        <h1
          className="text-2xl font-bold"
          onClick={() => setErrorMessage("BOOM !")}
        >
          Products
        </h1>
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
