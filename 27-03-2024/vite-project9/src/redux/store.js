import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import cartProductsReducer from "./cartProductsSlice";

const store = configureStore({
	reducer: {
		products: productsReducer,
		cartProducts: cartProductsReducer,
	},
});

export default store;
