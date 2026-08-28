import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

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
