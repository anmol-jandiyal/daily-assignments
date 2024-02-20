import { renderList } from "./ui.js";

async function getData(url) {
	const response = await fetch(url);
	const body = await response.json();

	return body;
}
const dataPromise = getData("https://jsonplaceholder.typicode.com/users");

dataPromise.then((data) => {
	renderList(data);
});
