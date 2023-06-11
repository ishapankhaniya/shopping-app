export const display = (items) => {
  // console.log("action", items);
  return {
    type: "display",
    payload: items,
  };
};
export const addcart = (items) => {
  return {
    type: "addcart",
    payload: items,
  };
};
export const removecart = (items) => {
  return {
    type: "removecart",
    payload: items,
  };
};
