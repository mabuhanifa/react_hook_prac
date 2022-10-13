import React from "react";

const CartItem = ({ item }) => {
  const { title, thumbnail } = item;
  console.log(item);
  return (
    <div className="item flex">
        <img src={thumbnail} alt="" className="t-img"/>
      <h4>{title}</h4>
    </div>
  );
};

export default CartItem;
