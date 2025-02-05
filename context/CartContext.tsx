"use client"
import { createContext, useState, useContext, ReactNode } from "react";

// Define CartItem type
export interface CartItem {
  _id: string;  // Ensure you use _id in CartItem, not id
  name: string;
  price: number;
  image: string;
  quantity: number;
}


interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem, quantity: number) => void;
  removeFromCart: (id: string) => void;
  getCartTotal: () => number;
}

// Create Context
export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Function to add items to the cart
  const addToCart = (product: { _id: string; name: string; price: number; image: string }, quantity: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);  // Use _id here
      if (existingItem) {
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + quantity } : item  // Use _id here
        );
      } else {
        return [
          ...prevCart,
          {
            _id: product._id,  // Correctly use _id here
            name: product.name,
            price: product.price,
            image: product.image,
            quantity,
          },
        ];
      }
    });
  };
   
  // Function to remove items from the cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  // 🆕 Function to calculate the total price dynamically
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// 🆕 Custom Hook to use Cart Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
