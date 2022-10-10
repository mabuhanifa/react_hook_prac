import axios from "axios";
import { useEffect } from "react";
import "./App.css";

function App() {
  const fetchProducts = async () => {
    const {
      data: { products },
    } = await axios.get("https://dummyjson.com/products");
    console.log(products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <div></div>
    </div>
  );
}

export default App;
