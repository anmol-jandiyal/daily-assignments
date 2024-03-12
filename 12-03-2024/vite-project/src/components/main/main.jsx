import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import "./css/main.css";
//<------------Main-------------------------->
function Main() {
	return (
		<>
			{/* home*/}
			<Page1 />

			{/* features */}
			<Page2 />

			{/* services */}
			<Page3 />
		</>
	);
}

export default Main;
