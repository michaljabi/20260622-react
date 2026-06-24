import { createBrowserRouter } from "react-router";
import App from "./App.tsx";
import { Products } from "./pages/Products.tsx";
import { TopSellers } from "./pages/TopSellers.tsx";
import { NotFound404 } from "./pages/NotFound404.tsx";
import { AddProduct } from "./pages/AddProduct.tsx";

// const NotFoundPage = () => <div>Page not found :( </div>

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Products },
      { path: "top-sellers", Component: TopSellers },
      { path: "add-product", Component: AddProduct },
      //   { path: "hello", Component: () => "HELLO" },
      //   { path: "hello", Component: () => "HELLO2" },
      { path: "*", Component: NotFound404 },
    ],
  },
]);
