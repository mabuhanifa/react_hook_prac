import React from 'react';
import "../App.css";

const Cart = ({state,dispatch}) => {
    const { cart } = state;
    console.log(cart)
    return (
        <div className='cart'>
            {cart?.length}
        </div>
    );
};

export default Cart;