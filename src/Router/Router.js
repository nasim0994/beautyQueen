import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Cart from "./../Pages/Cart/Cart";
import Account from "./../Pages/Account/Account";
import ProductsDetails from "./../Pages/ProductsDetails/ProductsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <ProductsDetails />,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.id}`),
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/account",
        element: <Account />,
      },
    ],
  },
]);
