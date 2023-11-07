import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit uses Immer BTS
      // We HAVE to mutate the state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    // originalState = {items: ["Pizza"]}
    clearCart: (state) => {
      // RTK - Either Mutate the existing state or return a new State
      // state.items.length = 0; => originalState =[]

      return { items: [] }; //this new object will be replaced inside originalState = { itms: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
