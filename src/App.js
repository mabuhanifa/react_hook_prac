import axios from "axios";
import { useEffect, useReducer } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { cartReducer } from "./reducers/cartReducer";

function App() {
  const initialState = {
    products: [],
    cart: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);
  console.log(state);
  const fetchProducts = async () => {
    const {
      data: { products },
    } = await axios.get("https://dummyjson.com/products");
    dispatch({
      type: "ADD_PRODUCTS",
      payload: products,
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <Products/>
      <Cart/>
    </div>
  );
}

export default App;
