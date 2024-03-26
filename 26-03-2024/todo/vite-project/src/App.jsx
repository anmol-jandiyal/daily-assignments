import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import CreateTodo from "./components/pages/CreateTodo";
import DisplayTodo from "./components/pages/DisplayTodo";
import UpdateTodo from "./components/pages/UpdateTodo";

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
				path: "create",
				element: <CreateTodo />,
			},
			{
				path: "display",
				element: <DisplayTodo />,
			},
			{
				path: "update",
				element: <UpdateTodo />,
			},
		],
	},
];

const router = createBrowserRouter(route);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
