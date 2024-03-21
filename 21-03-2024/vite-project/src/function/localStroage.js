function localStorageFetch() {
	try {
		return JSON.parse(window.localStorage.getItem("users"));
	} catch (err) {
		return [];
	}
}
function updateLocalStrorage(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

export { localStorageFetch, updateLocalStrorage };
