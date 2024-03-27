import { createSlice } from "@reduxjs/toolkit";

const cartProductsSlice = createSlice({
	name: "cartProducts",

	initialState: {
		cartProductsArray: [],
		totalPrice: 0,
	},

	reducers: {
		addProductToCart: (state, action) => {
			console.log(action.payload.product);
			const product = action.payload.product;
			const id = product.id;

			const index = state.cartProductsArray.findIndex((prod) => {
				return prod.product.id === id;
			});

			if (index === -1) {
				state.cartProductsArray.push({ product: action.payload.product, count: 1 });
			} else {
				state.cartProductsArray[index].count++;
			}

			//in both cases i.e new product or existing product we increment in the price
			state.totalPrice += product.price;
		},
		removeFromCart: (state, action) => {
			const id = action.payload.id;
			const index = state.cartProductsArray.findIndex((prod) => {
				return prod.product.id === id;
			});

			//before removing decrease the totalPrice
			state.totalPrice -= state.cartProductsArray[index].count * state.cartProductsArray[index].product.price;
			state.cartProductsArray.splice(index, 1);
		},
		countIncreaseDecrease: (state, action) => {
			const offSet = action.payload.offSet;
			const id = action.payload.id;

			const index = state.cartProductsArray.findIndex((prod) => {
				return prod.product.id === id;
			});

			//offset = 1 if addition and offset = -1 if we have to  decrease the product count

			state.cartProductsArray[index].count += offSet;
			state.totalPrice += state.cartProductsArray[index].product.price * offSet;

			if (state.cartProductsArray[index].count === 0) {
				//remove the product from the cart
				state.cartProductsArray.splice(index, 1);
			}
		},
	},
});

export default cartProductsSlice.reducer;
export const { addProductToCart, removeFromCart, countIncreaseDecrease } = cartProductsSlice.actions;
