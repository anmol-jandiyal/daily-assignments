import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
	name: "products",

	initialState: {
		productsArray: [],
	},
	reducers: {
		setProducts: (state, action) => {
			state.productsArray = [...action.payload.products];
		},
	},
});

export default productsSlice.reducer;
export const { setProducts } = productsSlice.actions;
