export const actionType = {
  SET_CART_SHOW: "SET_CART_SHOW",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_FOOD_ITEMS:
      return {
        ...state,
        foodItems: action.foodItems,
      };
    default:
      return state;
  }
};

export default reducer;
