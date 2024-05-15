import {  configureStore } from "@reduxjs/toolkit";
import { LoginLogoutReducer } from "../reducers/AuthReducer";
import { CartReducer } from "../reducers/CartReducers";

const store=configureStore({
    reducer:{
        LoginLogoutReducer,
        CartReducer
    }})
export default store;