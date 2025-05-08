import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/ProductReducer";
import { errorReducer } from "./reducers/ErrorReducer";
import { cartReducer } from "./reducers/cartReducer";


const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
const initialState = {
    carts: {cart: cartItems}
}

export const Store = configureStore({
    reducer: {
        products: productReducer,
        errors: errorReducer,
        carts: cartReducer
    },
    preloadedState: initialState
});