import { createSlice } from "@reduxjs/toolkit";

export const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    admin: JSON.parse(localStorage.getItem("admin"))
      ? JSON.parse(localStorage.getItem("admin"))
      : null,
  },
  reducers: {
    logedadmin: (state, action) => {
      state.admin = action.payload;
    },
  },
});

export const { logedadmin } = AdminSlice.actions;

export default AdminSlice.reducer;
