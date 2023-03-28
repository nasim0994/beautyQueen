import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Cart from "./../Pages/Cart/Cart";
import ProductsDetails from "./../Pages/ProductsDetails/ProductsDetails";
import Shop from "../Pages/Shop/Shop";
import Account from "../Layout/Account";
import MyProfile from "./../Pages/AccountPage/MyProfile/MyProfile";
import MyOrders from "./../Pages/AccountPage/MyOrders/MyOrders";
import MyAddress from "./../Pages/AccountPage/MyAddress/MyAddress";
import CouponsVoucher from "./../Pages/AccountPage/CouponsVoucher/CouponsVoucher";
import PointBalance from "./../Pages/AccountPage/PointBalance/PointBalance";
import Wishlist from "../Pages/AccountPage/Wishlist/Wishlist";
import FollowedStores from "./../Pages/AccountPage/FollowedStores/FollowedStores";
import BecomeMerchant from "../Pages/BecomeMerchant/BecomeMerchant";
import AllFlashSale from "./../Pages/AllFlashSale/AllFlashSale";

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
        path: "/products/:title",
        element: <ProductsDetails />,
        loader: ({ params }) =>
          fetch(
            `https://beauty-queen-server.vercel.app/products/${params.title}`
          ),
      },
      {
        path: "/shops",
        element: <Shop />,
      },
      {
        path: "/category/:category",
        element: <Shop />,
      },
      {
        path: "/category/:category/:subCategory",
        element: <Shop />,
      },
      {
        path: "/flashSale",
        element: <AllFlashSale />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },

  {
    path: "/account",
    element: <Account />,
    children: [
      {
        path: "/account",
        element: <MyProfile />,
      },
      {
        path: "/account/profile",
        element: <MyProfile />,
      },
      {
        path: "/account/orders",
        element: <MyOrders />,
      },
      {
        path: "/account/address",
        element: <MyAddress />,
      },
      {
        path: "/account/coupons-voucher",
        element: <CouponsVoucher />,
      },
      {
        path: "/account/point-balance",
        element: <PointBalance />,
      },
      {
        path: "/account/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/account/followed-stores",
        element: <FollowedStores />,
      },
    ],
  },

  {
    path: "/merchant",
    element: <BecomeMerchant />,
  },
]);
