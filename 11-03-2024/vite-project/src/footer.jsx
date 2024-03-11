import { RiGithubFill, RiFacebookLine, RiInstagramLine, RiTwitterXLine, RiYoutubeLine } from "@remixicon/react";

const importantLinks = [
	{ url: "#", title: "Google" },
	{ url: "#", title: "About" },
	{ url: "#", title: "Home" },
	{ url: "#", title: "Products" },
];

const icons = [
	{ logo: <RiGithubFill />, url: "www.github.com" },
	{ logo: <RiFacebookLine />, url: "www.facebook.com" },
	{ logo: <RiInstagramLine />, url: "www.instagram.com" },
	{ logo: <RiTwitterXLine />, url: "www.twitter.com" },
	{ logo: <RiYoutubeLine />, url: "www.youtube.com" },
];

function Footer() {
	return (
		<footer>
			<div className="contact-div logo-links">
				{icons.map((icon, index) => {
					return (
						<a href={icon.url} key={index}>
							{icon.logo}
						</a>
					);
				})}
			</div>

			<div className="important-links-div">
				<ul>
					{importantLinks.map((link, index) => {
						return (
							<li key={index}>
								<a href={link.url}>{link.title}</a>
							</li>
						);
					})}
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
