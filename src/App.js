import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Products from "./components/Products";
import useProduct from "./contextApi/ProductContext";

function App() {
  const { state, dispatch } = useProduct();
  console.log(state);

  useEffect(() => {
    const fetchProducts = async () => {
      const {
        data: { products },
      } = await axios.get("https://dummyjson.com/products");
      dispatch({
        type: "ADD_PRODUCTS",
        payload: products,
      });
    };
    fetchProducts();
  }, [dispatch]);
  return (
    <div className="app">
      <Products />
      <Cart />
    </div>
  );
}

export default App;
