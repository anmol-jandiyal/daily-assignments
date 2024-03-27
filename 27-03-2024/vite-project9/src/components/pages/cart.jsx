import CartProductCard from "./cartProductCard";
import { useSelector } from "react-redux";

export default function Cart() {
	const cartProducts = useSelector((store) => {
		return store.cartProducts;
	});

	return (
		<div className="homePage">
			{cartProducts.cartProductsArray.map((productDetails, index) => {
				return <CartProductCard productDetails={productDetails} key={index} />;
			})}

			{cartProducts.totalPrice === 0 ? (
				<h1 style={{ textAlign: "center", color: "gray" }}>No Product In Cart</h1>
			) : (
				<div className="totalPrice" style={{ display: "flex", justifyContent: "space-evenly", border: "2px double black" }}>
					<h1>Total Cart Price</h1>
					<h1>{cartProducts.totalPrice}</h1>
				</div>
			)}
		</div>
	);
}
