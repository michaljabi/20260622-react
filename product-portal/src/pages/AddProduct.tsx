import { useFormik } from "formik";
import { Input } from "../shared/forms/Input";
import type { Product } from "../products/product";
import { Button } from "../shared/Button";
import { Select } from "../shared/forms/Select";
import { Textarea } from "../shared/forms/Textarea";

type ProductForm = Omit<Product, "id">;

export function AddProduct() {
  const formik = useFormik<ProductForm>({
    initialValues: {
      name: "",
      category: "Accessories",
      description: "",
      imgUrl: `https://picsum.photos/id/555/600/800`,
      price: 0,
    },
    validate: (values) => {
      const errors: Partial<Record<keyof ProductForm, string>> = {};
      if (!values.name.trim()) {
        errors.name = "Name is required";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const getError = (field: keyof ProductForm) =>
    formik.touched[field] ? formik.errors[field] : undefined;

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Add Product</h1>
        <p className="text-sm text-zinc-500">
          Fill in form to add new product to our database
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center md:justify-end pr-6">
          <img
            src={formik.values.imgUrl}
            alt="Product preview"
            className="w-40 sm:w-56 md:w-full md:max-w-sm aspect-3/4 object-cover rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"
          />
        </div>
        <form className="flex flex-col gap-4">
          <Input
            id="name"
            name="name"
            type="text"
            label="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={getError("name")}
          />

          <Select
            id="category"
            name="category"
            label="Category"
            items={["Accessories", "Audio", "Gaming", "Mobile", "Photo"]}
          />

          <Textarea id="description" name="description" label="Description" />

          <Input id="imgId" name="imgId" type="number" label="Choose image" />

          <Input id="price" name="price" type="number" label="Price" />

          <div className="mt-3 flex justify-end">
            <Button onPress={formik.handleSubmit}>Add new Product</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
