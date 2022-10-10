export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
