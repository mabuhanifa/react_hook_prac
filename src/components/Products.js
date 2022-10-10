import React from "react";
import "../App.css";
import Product from "./Product";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  console.log(products);
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
