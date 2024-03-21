import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { localStorageFetch } from "./function/localStroage";
import SignUp from "./components/pages/signup";
import Login from "./components/pages/login";
import NavBar from "./components/navBar";

//fetching data from local storage
const users = localStorageFetch();

//defining routes
const route = [
	{
		path: "/",
		element: (
			<div>
				<NavBar />
				<Outlet />
			</div>
		),
		children: [
			{
				path: "/signUp",
				element: <SignUp users={users} />,
			},
			{
				path: "/login",
				element: <Login users={users} />,
			},
		],
	},
];

const router = createBrowserRouter(route);

function App() {
	return <RouterProvider router={router} />;
}
export default App;
