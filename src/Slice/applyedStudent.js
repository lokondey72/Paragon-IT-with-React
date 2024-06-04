import { createSlice } from "@reduxjs/toolkit";

export const applyedStudent = createSlice({
  name: "applyStuD",
  initialState: {
    applyStuD: null,
  },
  reducers: {
    applyData: (state, action) => {
      state.applyStuD = action.payload;
    },
  },
});

export const { applyData } = applyedStudent.actions;

export default applyedStudent.reducer;
