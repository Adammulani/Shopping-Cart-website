import { configureStore } from "@reduxjs/toolkit";
import MyCartSlice from "./Slices/MyCartSlice";

export const store=configureStore({
    reducer:{
        cart: MyCartSlice
    }
});