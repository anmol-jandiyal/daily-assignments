import List from "./utilities/list";
import "./css/header.css";

const navOptions = [
	{ link: "#feature-page", title: "Features" },
	{ link: "#", title: "About" },
	{ link: "#services-page", title: "Services" },
];
const logoSrc = "https://shorturl.at/cgrx7";

function Header() {
	return (
		<nav>
			<img src={logoSrc} alt="" className="left" />

			<div className="right">
				<List
					list={navOptions.map((opt, index) => {
						return (
							<a href={opt.link} className="link">
								{opt.title}
							</a>
						);
					})}
				/>

				<button className="open-acc-btn btn" type="button">
					Open Account
				</button>
			</div>
		</nav>
	);
}

export default Header;
