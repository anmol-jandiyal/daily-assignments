import { NavLink } from "react-router-dom";
import { RiShoppingCart2Fill } from "@remixicon/react";

function activeTab({ isActive }) {
	return isActive ? "activeTab" : "";
}
export default function NavBar() {
	return (
		<div className="navBar">
			<NavLink to="/home" className={activeTab}>
				Home
			</NavLink>
			<NavLink to="/cart" className={activeTab}>
				<RiShoppingCart2Fill />
			</NavLink>
		</div>
	);
}
