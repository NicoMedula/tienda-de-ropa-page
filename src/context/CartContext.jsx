import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Guardar carrito en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, size) => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.size === size
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, size, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId, size) => {
    setCartItems(
      cartItems.filter((item) => !(item.id === itemId && item.size === size))
    );
  };

  const updateQuantity = (itemId, size, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId && item.size === size
          ? { ...item, quantity: Math.max(1, newQuantity) }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
