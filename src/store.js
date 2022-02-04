import { configureStore } from "@reduxjs/toolkit";
import petReducer from "./pets/reducers";

export default configureStore({
 reducer: {
   pets: petReducer,
 },
});