import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./Slice/AdminSlice";
import applyedStudent from "./Slice/applyedStudent";
import studentCounterSlice from "./Slice/studentCounterSlice";

export default configureStore({
  reducer: { AdminSlice, applyedStudent, studentCounterSlice },
});
