export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefind"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

      return userInfo;
};

export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("cartItem") !== "undefind"
      ? JSON.parse(localStorage.getItem("cartItem"))
      : localStorage.clear();

      return cartInfo ? cartInfo : [];
};
