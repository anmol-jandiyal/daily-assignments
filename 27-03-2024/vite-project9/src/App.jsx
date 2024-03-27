import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import NavBar from "./components/navbar";
import Home from "./components/pages/home";
import Cart from "./components/pages/cart";
import { setProducts } from "./redux/productsSlice";

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
				path: "home",
				element: <Home />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
		],
	},
];

const router = createBrowserRouter(route);

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => {
				console.log(data.products);
				dispatch(setProducts({ products: data.products }));
			});
	}, []);

	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
