import { RiFundsLine, RiComputerLine } from "@remixicon/react";

//<------------PAGE 2-------------------------->
const features = [
	{
		className: "digital-description description",
		imgSrc: "https://shorturl.at/adsIZ",
		heading: "100% digital bank",
		icon: (
			<div className="icon digital-icon">
				<RiComputerLine />
			</div>
		),
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ipsa! Dignissimos, consequatur maxime rerum quae inventore ut soluta recusandae assumenda odio laborum illo",
	},
	{
		className: "grow-description description",
		imgSrc: "https://shorturl.at/jkDJK",
		heading: "Watch Your Money Growing",
		icon: (
			<div className="icon digital-icon">
				<RiFundsLine />
			</div>
		),
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ipsa! Dignissimos, consequatur maxime rerum quae inventore ut soluta recusandae assumenda odio laborum illo",
	},
];

function Features() {
	return (
		<div className="features">
			{features.map((feature, index) => {
				return (
					<div className={feature.className} key={index}>
						<img src={feature.imgSrc} alt="" />

						<div className="right">
							{feature.icon}

							<h2>{feature.heading}</h2>

							<p>{feature.description}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

function Page2() {
	return (
		<>
			<div className="feature-page page section" id="feature-page">
				<div className="heading">
					<h3>FEATURES</h3>
					<h1>Everything you need in a modern bank and more.</h1>
				</div>

				<Features />
			</div>
		</>
	);
}

export default Page2;
