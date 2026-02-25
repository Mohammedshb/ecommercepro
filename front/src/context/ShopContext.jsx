
import { createContext, useState, useEffect } from "react";
import { all_products } from "../assets/data";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ يدعم الإضافة مع كمية
  const addToCart = (id, quantity = 1) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + quantity : quantity,
    }));
  };

  const removeFromCart = (id, removeAll = false) => {
    const key = String(id);

    setCartItems((prev) => {
      const updated = { ...prev };

      if (removeAll || updated[key] === 1) delete updated[key];
      else updated[key]--;

      return updated;
    });
  };

  // ✅ المقارنة النصية تحل مشكلة عدم إيجاد المنتج
  const getTotalCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [id, qty]) => {
      const product = all_products.find(
        (p) => String(p._id) === String(id)
      );

      return total + (product ? product.price * qty : 0);
    }, 0);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const value = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    token,
    setToken,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;