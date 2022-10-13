import React from "react";

const Product = ({ product, state: { cart }, dispatch }) => {
  const newProduct = { ...product, quantity: 1 };
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: newProduct,
    });
  };

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: newProduct,
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
