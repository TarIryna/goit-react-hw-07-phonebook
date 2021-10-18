import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter(state, { payload }) {
      state.filter(payload);
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterSelector = (state) => state.filter;
export const filterReducer = filterSlice.reducer;

// export default { changeFilter, filterSelector, filterReducer };
