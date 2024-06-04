import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./Slice/AdminSlice";
import applyedStudent from "./Slice/applyedStudent";


export default configureStore({
  reducer: { AdminSlice, applyedStudent },
});
