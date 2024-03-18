import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/home";
import Users from "./components/pages/users";
import Todos from "./components/pages/todos";
import Posts from "./components/pages/posts";
import NavBar from "./components/navBar";
import Footer from "./footer";

const route = [
	{
		path: "/",
		element: (
			<div>
				<NavBar />
				<Outlet />
				<Footer />
			</div>
		),
		errorElement: <h1>Page not found</h1>,

		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/users",
				element: <Users />,
			},
			{
				path: "/posts",
				element: <Posts />,
			},
			{
				path: "/todos",
				element: <Todos />,
			},
		],
	},
];
const router = createBrowserRouter(route);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
