import Card from "./card";

const demoSrc = "https://shorturl.at/aehqZ";
const bankServices = [
	{ img: demoSrc, title: "Deposit Services", items: ["Open Savings Account", "Open Checking Account", "Purchase Certificates of Deposit (CDs)", "Open Money Market Account"] },
	{
		img: demoSrc,
		title: "Lending Services",
		items: ["Apply for Personal Loan", "Apply for Mortgage", "Apply for Auto Loan", "Apply for Business Loan", "Request Line of Credit", "Activate Overdraft Protection"],
	},
	{
		img: demoSrc,
		title: "Electronic Banking Services",
		items: ["Access Online Banking", "Use Mobile Banking", "Pay Bills Online", "Initiate Electronic Funds Transfer (EFT)", "Request Wire Transfer"],
	},
	{
		img: demoSrc,
		title: "Investment Services",
		items: ["Open Brokerage Account", "Invest in Mutual Funds", "Set up Retirement Account (e.g., IRA, 401(k))", "Engage in Wealth Management Services", "Seek Financial Advisory"],
	},
	{ img: demoSrc, title: "Payment Services", items: ["Use Debit Card", "Use Credit Card", "Use Prepaid Card", "Sign up for Merchant Services"] },
	{ img: demoSrc, title: "Foreign Exchange Services", items: ["Exchange Currency", "Initiate International Wire Transfer", "Open Foreign Currency Account"] },
	{ img: demoSrc, title: "Insurance Services", items: ["Purchase Life Insurance", "Buy Home Insurance", "Purchase Auto Insurance", "Acquire Travel Insurance", "Get Health Insurance"] },
	{ img: demoSrc, title: "Wealth Management Services", items: ["Set up Trust", "Engage in Estate Planning", "Receive Investment Advisory Services"] },
	{
		img: demoSrc,
		title: "Corporate and Business Services",
		items: ["Utilize Corporate Banking Services", "Manage Treasury", "Access Merchant Banking", "Utilize Trade Finance", "Utilize Cash Management Services"],
	},
	{ img: demoSrc, title: "Specialized Services", items: ["Rent Safe Deposit Box", "Access Notary Services", "Participate in Financial Education Programs", "Utilize Escrow Services"] },
];

const styles = {
	backgroundColor: "rgb(82 148 160)",
	display: "flex",
	flexWrap: "wrap",
	padding: "30px",
	gap: "20px",
	alignItems: "center",
	justifyContent: "center",
};

function Page3() {
	return (
		<div className="services-page page section" id="services-page">
			<div className="heading">
				<h3>Bank Services</h3>
				<h1>Unlock Your Financial Potential Today!</h1>
			</div>
			<div className="services-conatiner" style={styles}>
				{bankServices.map((service, index) => {
					return <Card key={index} service={service} />;
				})}
			</div>
		</div>
	);
}

export default Page3;
