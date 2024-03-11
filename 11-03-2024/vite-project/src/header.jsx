const navOptions = [
	{ link: "#feature-page", title: "Features" },
	{ link: "#", title: "About" },
	{ link: "#", title: "Contact" },
];
const logoSrc = "https://shorturl.at/cgrx7";

function Header() {
	return (
		<nav>
			<img src={logoSrc} alt="" className="left" />

			<div className="right">
				<ul>
					{navOptions.map((opt, index) => {
						return (
							<li key={index}>
								<a href={opt.link} className="link">
									{opt.title}
								</a>
							</li>
						);
					})}

					<button className="open-acc-btn btn" type="button">
						Open Account
					</button>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
