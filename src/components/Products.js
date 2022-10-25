import React from "react";
import "../App.css";
import useProduct from "../contextApi/ProductContext";
import Product from "./Product";

const Products = () => {
  const {
    state: { products },
  } = useProduct();
  return (
    <div className="products">
      {products &&
        products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
    </div>
  );
};

export default Products;
