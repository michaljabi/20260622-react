import { createBrowserRouter } from "react-router";
import App from "./App.tsx";
import { Products } from "./pages/Products.tsx";
import { TopSellers } from "./pages/TopSellers.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Products },
      { path: "top-sellers", Component: TopSellers },
      //   { path: "hello", Component: () => "HELLO" },
      //   { path: "hello", Component: () => "HELLO2" },
      { path: "*", Component: () => <div>Page not found :( </div> },
    ],
  },
]);
