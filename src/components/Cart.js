import React from "react";
import "../App.css";
import CartItem from "./CartItem";

const Cart = ({ state, dispatch }) => {
  
  const { cart } = state;
  const price = cart.reduce((a, c) => c.price * c.quantity + a, 0);
  return (
    <div className="cart">
      <h1>Cart</h1>
      <h2>Total Items: {cart?.length}</h2>
      <h2>Total Price: {price}</h2>

      <div className="cartItem">
        {cart &&
          cart.map((item) => {
            return <CartItem item={item} key={item.id} dispatch={dispatch} />;
          })}
      </div>
    </div>
  );
};

export default Cart;
