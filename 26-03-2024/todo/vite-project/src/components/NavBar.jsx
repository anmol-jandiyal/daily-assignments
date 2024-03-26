import { NavLink, useFetcher } from "react-router-dom";

function activeTab({ isActive }) {
	return isActive ? "activeTab" : "";
}
export default function NavBar() {
	return (
		<div className="navBar">
			<NavLink to="/create" className={activeTab}>
				Create Todo
			</NavLink>
			<NavLink to="/display" className={activeTab}>
				Display{" "}
			</NavLink>
		</div>
	);
}
