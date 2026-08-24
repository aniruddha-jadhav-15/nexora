import { useState } from "react";
import { CartContext } from "./CartContext";
function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, size, quantity) => {
    setCartItems((prev) => [
      ...prev,
      {
        product: product,
        size: size,
        quantity: quantity,
      },
    ]);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
