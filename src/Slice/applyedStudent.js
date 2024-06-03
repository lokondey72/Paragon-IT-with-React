import { createSlice } from "@reduxjs/toolkit";

export const applyedStudentSlice = createSlice({
  name: "applyStuData",
  initialState: {
    applyStuData: null,
  },
  reducers: {
    applyData: (state, action) => {
      state.applyStuData = action.payload;
    },
  },
});

export const { applyData } = applyedStudentSlice.actions;

export default applyedStudentSlice.reducer;
