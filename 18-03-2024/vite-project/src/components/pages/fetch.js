const ROOT = "https://jsonplaceholder.typicode.com/";

function fetchData(setData, route) {
	fetch(ROOT + route)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			setData(data);
		})
		.catch((err) => {
			console.log(err);
		});
}
export default fetchData;
