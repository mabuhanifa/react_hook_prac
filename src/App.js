import axios from "axios";
import { useEffect, useReducer } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { cartReducer } from "./reducers/cartReducer";
import { ReducerContext } from "./reducers/Context";

function App() {
  const initialState = {
    products: [],
    cart: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);
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
    <ReducerContext.Provider value={{ state, dispatch }}>
      <div className="app">
        <Products state={state} dispatch={dispatch} />
        <Cart state={state} dispatch={dispatch} />
      </div>
    </ReducerContext.Provider>
  );
}

export default App;
