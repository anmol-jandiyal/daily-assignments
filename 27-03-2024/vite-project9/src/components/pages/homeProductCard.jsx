import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cartProductsSlice";

export default function HomeProductCard({ product }) {
	const dispatch = useDispatch();

	return (
		<div className="productCard">
			<div>
				<img src={product.thumbnail} alt="" />
			</div>
			<div>
				<div>
					<h2>{product.title}</h2>
					<h4>Rs{product.price}</h4>
					<p>{product.description}</p>
				</div>
				<button
					onClick={() => {
						dispatch(addProductToCart({ product: { ...product } }));
					}}>
					Add To Cart
				</button>
			</div>
		</div>
	);
}
