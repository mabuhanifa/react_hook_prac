export const cartReducer = (state, action) => {
  switch (action.type) {
    //"ADD_PRODUCTS"

    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };

    // "ADD_TO_CART"
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };

    // "REMOVE_FROM_CART"
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((c) => c !== action.payload) };
    case "CHANGE_CART_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id
            ? (c.quantity = action.payload.quantity)
            : c.quantity
        ),
      };
    default:
      return state;
  }
};
