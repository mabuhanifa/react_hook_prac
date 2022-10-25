import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const initialState = {
    products: [],
    cart: [],
  };

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const value = { state, dispatch };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

const useProduct = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("ShopContext is undefined");
  }
  return context;
};

export default useProduct;
