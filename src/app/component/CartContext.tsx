// // context/CartContext.js
// "use client"
// import { createContext, useState, useEffect, useContext } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartCount, setCartCount] = useState(() => {
//     if (typeof window !== "undefined") {
//       const savedCount = localStorage.getItem("cartCount");
//       return savedCount ? parseInt(savedCount, 10) : 0;
//     }
//     return 0;
//   });

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("cartCount", cartCount.toString());
//     }
//   }, [cartCount]);

//   const addToCart = () => {
//     setCartCount((prevCount) => prevCount + 1);
//   };

//   return (
//     <CartContext.Provider value={{ cartCount, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);