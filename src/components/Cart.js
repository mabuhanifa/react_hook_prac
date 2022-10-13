import React from "react";
import "../App.css";
import CartItem from "./CartItem";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const price = cart.reduce((a, c) => c.price + a, 0);
  return (
    <div className="cart">
      <h2>Cart</h2>
      <h4>Total Items: {cart?.length}</h4>
      <h4>Total Price: {price}</h4>

      <div className="cartItem">
        {cart &&
          cart.map((item) => {
            return <CartItem item={item} key={item.id}/>;
          })}
      </div>
    </div>
  );
};

export default Cart;
