import { RiDeleteBinLine } from "@remixicon/react";
import { countIncreaseDecrease, removeFromCart, addProductToCart } from "../../redux/cartProductsSlice";
import { useDispatch } from "react-redux";

export default function CartProductCard({ productDetails }) {
	const dispatch = useDispatch();
	const { product, count } = productDetails;

	return (
		<div className="cartProductCard">
			<div>
				<img src={product.thumbnail} alt="" />
			</div>
			<div>
				<div>
					<h2>{product.title}</h2>
					<h4 style={{ color: "gray" }}>Rs. {product.price}</h4>

					<h3>x {count}</h3>
				</div>
			</div>
			<div className="buttonDiv">
				<button
					className="decrement"
					onClick={() => {
						dispatch(countIncreaseDecrease({ offSet: -1, id: product.id }));
					}}>
					-
				</button>

				<button
					className="remove"
					style={{ padding: "0" }}
					onClick={() => {
						dispatch(removeFromCart({ id: product.id }));
					}}>
					<RiDeleteBinLine />
				</button>

				<button
					className="increment"
					onClick={() => {
						dispatch(countIncreaseDecrease({ offSet: 1, id: product.id }));
					}}>
					+
				</button>
			</div>
		</div>
	);
}
