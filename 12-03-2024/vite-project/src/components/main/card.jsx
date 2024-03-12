import List from "../utilities/list";
import "./css/card.css";

function Card(props) {
	const { title, items, img } = props.service;

	return (
		<div className="card">
			<div>
				<img src={img} alt="" />
				<h3>{title}</h3>
			</div>

			<div>
				<List list={items} listStyle="square" />
			</div>
		</div>
	);
}

export default Card;
