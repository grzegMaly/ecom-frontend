import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/ProductReducer";
import { errorReducer } from "./reducers/ErrorReducer";
import { cartReducer } from "./reducers/cartReducer";
import { authRecuder } from "./reducers/authReducer";


const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
const user = JSON.parse(localStorage.getItem("auth") || "null");
const initialState = {
    auth: {user: user},
    carts: {cart: cartItems}
}

export const Store = configureStore({
    reducer: {
        products: productReducer,
        errors: errorReducer,
        carts: cartReducer,
        auth: authRecuder
    },
    preloadedState: initialState
});