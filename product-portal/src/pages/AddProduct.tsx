import { useFormik } from "formik";
import { Input } from "../shared/forms/Input";
import type { Product } from "../products/product";
import { Button } from "../shared/Button";
import { Select } from "../shared/forms/Select";
import { Textarea } from "../shared/forms/Textarea";
import { productsResource } from "../products/products-resource";

type ProductForm = Omit<Product, "id" | "imgUrl"> & { imgId: number };

export function AddProduct() {
  
  const formik = useFormik<ProductForm>({
    initialValues: {
      name: "",
      category: "Mobile",
      description: "",
      imgId: 1,
      price: 0,
    },
    validate: (values) => {
      const errors: Partial<Record<keyof ProductForm, string>> = {};
      if (!values.name.trim()) {
        errors.name = "Name is required";
      }
      if (values.name.length < 5) {
        errors.name = "Name of the product must be at least 5 chars";
      }
      return errors;
    },
    onSubmit: async (values) => {
      //console.log(values);
      //console.log('imgUrl', imgUrl);
      // Tutaj wysyłka na BACK END
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {imgId, ...rest} = values;
        await productsResource.addOne({...rest, imgUrl})
        formik.resetForm();
      } catch (e) {
        console.error(e)
      }
    },
  });

  const getError = (field: keyof ProductForm) =>
    formik.touched[field] ? formik.errors[field] : undefined;

  const imgUrl = `https://picsum.photos/id/${formik.values.imgId}/600/800`

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
            src={imgUrl}
            alt="Product preview"
            className="w-40 sm:w-56 md:w-full md:max-w-sm aspect-3/4 object-cover rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"
          />
        </div>
        <form className="flex flex-col gap-4">
          {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes */}
          <Input
            id="name"
            name="name"
            type="text"
            label="Name"
            placeholder="Name of your product"
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
            error={getError("category")}
          />

          <Textarea
            id="description"
            name="description"
            label="Description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            error={getError("description")}
          />

          <Input
            id="imgId"
            name="imgId"
            type="number"
            label="Choose image"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imgId}
            error={getError("imgId")}
          />

          <Input
            id="price"
            name="price"
            type="number"
            label="Price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            error={getError("price")}
          />

          <div className="mt-3 flex justify-end">
            <Button onPress={formik.handleSubmit}>Add new Product</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
