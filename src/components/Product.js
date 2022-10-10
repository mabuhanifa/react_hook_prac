import React from "react";

const Product = ({ product, state, dispatch }) => {
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };
  return (
    <div className="product">
      <h3>{product.title}</h3>
      <img src={product.thumbnail} alt="" className="p-img" />
      <button className="p-btn" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
