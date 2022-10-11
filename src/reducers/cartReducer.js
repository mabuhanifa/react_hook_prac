export const cartReducer = (state, action) => {
  switch (action.type) {
    //"ADD_PRODUCTS"

    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };

    // "ADD_TO_CART"
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    // "ADD_TO_CART"
    case "REMOVE_FROM_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};
