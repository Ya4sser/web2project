import { createContext, useContext, useEffect, useState } from "react";

// Context lets any component read or change the cart without passing props down
const CartContext = createContext();

export function CartProvider({ children }) {
  // Load the saved cart from localStorage (so it survives a page refresh)
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Save the cart every time it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add a book, or increase its quantity if it's already in the cart
  function addToCart(book) {
    const existing = cart.find((item) => item.id === book.id);
    if (existing) {
      setCart(cart.map((item) =>
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  }

  // Change the quantity; removing the book if it drops to 0
  function updateQuantity(id, quantity) {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)));
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  // Totals calculated from the cart
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, itemCount, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Small helper so components can write: const { cart } = useCart();
export function useCart() {
  return useContext(CartContext);
}
