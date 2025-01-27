import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./cartSlice";


const appStore=configureStore({
    reducer: {
        cart: createReducer,
    },
});


export default appStore;