import React from "react";

const Product = ({ product, state: { cart }, dispatch }) => {
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };

  return (
    <div className="product">
      <h3>{product.title}</h3>
      <img src={product.thumbnail} alt="" className="p-img" />

      {cart.some((p) => p.id === product.id) ? (
        <button className="p-btn red" onClick={removeFromCart}>
          Remove from Cart
        </button>
      ) : (
        <button className="p-btn" onClick={addToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
