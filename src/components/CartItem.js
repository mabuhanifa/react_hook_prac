import React from "react";

const CartItem = ({ item, dispatch }) => {
  const { title, thumbnail } = item;
  const changeQty = (id, quantity) => {
    dispatch({
      type: "CHANGE_CART_QUANTITY",
      payload: {
        id,
        quantity,
      },
    });
  };
  return (
    <div className="item flex">
      <img src={thumbnail} alt="" className="t-img" />
      <h4>{title}</h4>
      <div className="flex js-i">
        <button
          className="i-btn"
          onClick={() => changeQty(item.id, item.quantity - 1)}
        >
          -
        </button>
        <h4>{item.quantity}</h4>{" "}
        <button
          className="i-btn"
          onClick={() => changeQty(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
