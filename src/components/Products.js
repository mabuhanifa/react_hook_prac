import React, { useContext } from "react";
import "../App.css";
import { ReducerContext } from "../reducers/Context";
import Product from "./Product";

const Products = ({ state, dispatch }) => {
  const abc =useContext(ReducerContext);
  console.log(abc)
  const { products } = state;
  return (
    <div className="products">
      {products &&
        products.map((product) => {
          return (
            <Product
              product={product}
              key={product.id}
              state={state}
              dispatch={dispatch}
            />
          );
        })}
    </div>
  );
};

export default Products;
