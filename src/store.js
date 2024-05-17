import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./Slice/AdminSlice";

export default configureStore({
  reducer: { AdminSlice },
});
