import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ShoppingCardContext = createContext();

// Prop del componente
ShoppingCardProvider.propTypes = {
  children: PropTypes.node,
};
// ...existing code...
export function ShoppingCardProvider({ children }) {
  const [count, setCount] = useState(0);
  console.log("Count ", count);
  return (
    <ShoppingCardContext.Provider value={{ count, setCount }}>
      {children}
    </ShoppingCardContext.Provider>
  );
}