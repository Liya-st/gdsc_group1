import { createContext, useState } from "react";
import { product } from "./Components/product.js";

export const SContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const SContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = product.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId, quantity) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + quantity
    }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <SContext.Provider value={contextValue}>
      {props.children}
    </SContext.Provider>
  );
};
export default SContext;