import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const { data: homeProducts = [], isLoading } = useQuery({
    queryKey: [""],
    queryFn: () =>
      fetch(`https://dummyjson.com/products?limit=10`).then((res) =>
        res.json()
      ),
  });
  const { data: flashAndPopularProducts = [] } = useQuery({
    queryKey: ["relatedProducts"],
    queryFn: () =>
      fetch(`https://dummyjson.com/products?limit=5`).then((res) => res.json()),
  });

  const localStorageCart = JSON.parse(localStorage.getItem("pMallCart"));
  const [cart, setCart] = useState(localStorageCart || []);

  const localStorageWishlist = JSON.parse(
    localStorage.getItem("pMallWishlist")
  );
  const [wishlist, setWishtlist] = useState(localStorageWishlist || []);

  // Set LocalStorage
  useEffect(() => {
    localStorage.setItem("pMallCart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("pMallWishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add To cart
  const handelAddToCart = (product, quantity) => {
    const existed = cart?.find((item) => item.id === product.id);
    if (!existed) {
      setCart([...cart, { ...product, quantity: quantity || 1 }]);
    }

    toast.success("Add to Cart Success", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  // increase Cart Quantity
  const handelIncreaseCart = (product) => {
    const existed = cart.find((item) => item.id === product.id);
    if (existed) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...existed, quantity: existed.quantity + 1 }
            : item
        )
      );
    }
  };

  const handelDecreaseCart = (product) => {
    const existed = cart.find((item) => item.id === product.id);
    if (existed.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...existed, quantity: existed.quantity - 1 }
            : item
        )
      );
    }
  };

  // Delete Cart
  const handelDeleteCart = (product) => {
    const confirm = window.confirm("Are you sure delete this item");
    if (confirm) {
      const newCart = cart.filter(
        (cartProduct) => cartProduct.id !== product.id
      );
      setCart(newCart);
    }
  };

  // Add To wishlist
  const handelAddWishlist = (product) => {
    const existed = wishlist.find((item) => item.id == product.id);
    if (!existed) {
      setWishtlist([...wishlist, product]);
    } else {
      const newWishlist = wishlist.filter(
        (wishlistProduct) => wishlistProduct.id !== product.id
      );
      setWishtlist(newWishlist);
    }
  };

  const handelAddToCartFromWishlist = (product) => {
    const existed = cart?.find((item) => item.id === product.id);
    if (!existed) {
      setCart([...cart, { ...product, quantity: 1 }]);

      toast.success("Add to Cart Success", {
        position: "top-center",
        autoClose: 1000,
      });
    } else {
      toast.warning("Already Add To Cart", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  const handelAddToCartAndDeleteWishlist = (product) => {
    const existed = cart?.find((item) => item.id === product.id);
    if (!existed) {
      setCart([...cart, { ...product, quantity: 1 }]);

      const newWishlist = wishlist.filter(
        (wishlistProduct) => wishlistProduct.id !== product.id
      );
      setWishtlist(newWishlist);

      toast.success("Add to Cart Success", {
        position: "top-center",
        autoClose: 1000,
      });
    } else {
      toast.warning("Already Add To Cart", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  // Delete wishlist
  const handelDeleteWishlist = (product) => {
    const confirm = window.confirm("Are you sure delete this item");
    if (confirm) {
      const newWishlist = wishlist.filter(
        (wishlistProduct) => wishlistProduct.id !== product.id
      );
      setWishtlist(newWishlist);
    }
  };

  const contextInfo = {
    homeProducts,
    flashAndPopularProducts,
    isLoading,
    handelAddToCart,
    handelIncreaseCart,
    handelDecreaseCart,
    handelDeleteCart,
    handelAddWishlist,
    handelAddToCartFromWishlist,
    handelAddToCartAndDeleteWishlist,
    handelDeleteWishlist,
    cart,
    wishlist,
  };
  return <Context.Provider value={contextInfo}>{children}</Context.Provider>;
};

export const UseContext = () => {
  const context = useContext(Context);
  return context;
};

export default ContextProvider;
