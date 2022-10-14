import React, { useContext } from "react";
import "../App.css";
import { ReducerContext } from "../reducers/Context";
import Product from "./Product";

const Products = () => {
  const {
    state: { products }
  } = useContext(ReducerContext);
  console.log(products);
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
