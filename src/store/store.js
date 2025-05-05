import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./reducers/ProductReducer";
import { ErrorReducer } from "./reducers/ErrorReducer";

export const Store = configureStore({
    reducer: {
        products: ProductReducer,
        errors: ErrorReducer,
    },
    preloadedState: {
    },
});