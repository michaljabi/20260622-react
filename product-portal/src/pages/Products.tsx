import { productsResource } from "../products/products-resource";
import { ProductCard } from "../products/ProductCard.tsx";
import { Notification } from "../shared/Notification.tsx";
import type { Product } from "../products/product.ts";
import { useState, useEffect } from "react";
import { LoaderCircle } from "lucide-react";

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
      // Gdybyśmy chicieli "re-fetch" danych to:
      // setIsLoading(true)
      // setErrorMessage("")

      try {
        const value = await productsResource.getAll();
        setProducts(value);
      } catch (e) {
        // console.log(e);
        if (e instanceof Error) {
          setErrorMessage(e.message);
        } else if (typeof e === "string") {
          setErrorMessage(e);
        } else {
          console.error(e);
          setErrorMessage("Unknown error :(");
        }
      } finally {
        setIsLoading(false);
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
        <h1 className="text-2xl font-bold">Products</h1>
        <p className="text-sm text-zinc-500">
          Pick something nice and add it to your cart.
        </p>
      </div>
      {isLoading && (
        <Notification variant="info">
          <span className="flex items-center gap-2">
            <LoaderCircle className="animate-spin" size={16} />
            Loading products...
          </span>
        </Notification>
      )}
      {errorMessage && (
        <Notification variant="danger">
          <span className="flex items-center gap-2">{errorMessage}</span>
        </Notification>
      )}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
