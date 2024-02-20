function createListItem(item) {
	const li = document.createElement("li");
	li.textContent = item.name;
	return li;
}

export function renderList(list) {
	const ul = document.querySelector(".list");

	for (let item of list) {
		const li = createListItem(item);
		ul.appendChild(li);
	}
}

export default createListItem;

/* export default { renderList, createListItem }; //we can give any name to  export item
//so we cannot use  import {fjdiaof,ofidjas} from ""  construct
//for this we can only use one name like import importedItem from ""

// but in case of simple export construct, we can only access the items exported by their names

//eg:  export {a,b,c}  ;  then we can only import by their name
 */
