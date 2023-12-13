import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "",
  filter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    sortByData: (state, action) => {
      state.sort = action.payload;
    },

    filterByData: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { sortByData, filterByData } = filterSlice.actions;
