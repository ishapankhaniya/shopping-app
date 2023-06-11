const initial = [];

const Displaydata = (state = initial, action) => {
  switch (action.type) {
    case "display":
      let data = action.payload.id;
      const exist = state.find((item) => item.id === data);
      if (exist) {
        return state.map((item) => {
          if (item.id === data) {
            return {
              ...item,
              qunty: item.qunty + 1,
            };
          }
          return item;
        });
      }

      return [...state, action.payload];
    case "addcart":
      let abc = action.payload;
      abc.qunty = action.payload.qunty + 1;

      return [...state];
    case "removecart":
      let abc1 = action.payload;
      abc1.qunty = action.payload.qunty - 1;

      return [...state];
    default:
      return state;
  }
};
export default Displaydata;
