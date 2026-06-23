import { productsResource } from "../products/products-resource";

export function Products() {

  const products = productsResource.getAll()

  console.log(products);

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <p className="text-sm text-zinc-500">
          Pick something nice and add it to your cart.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* tutaj będziemy wyświetlać produkty */}
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </section>
  );
}
