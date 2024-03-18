import { NavLink } from "react-router-dom";

const activeFn = ({ isActive }) => {
	return isActive ? "active" : "";
};

function NavBar() {
	return (
		<nav>
			<NavLink to="/" className={activeFn}>
				Home
			</NavLink>
			<NavLink to="/users" className={activeFn}>
				Users
			</NavLink>
			<NavLink to="/posts" className={activeFn}>
				Posts
			</NavLink>
			<NavLink to="/todos" className={activeFn}>
				Todos
			</NavLink>
		</nav>
	);
}
export default NavBar;
