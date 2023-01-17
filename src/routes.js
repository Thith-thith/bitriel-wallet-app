import PageRouteAnimation from "./Components/Animations/PageRoute";
import Sidebar from "./Components/Layout/Sidebar";
import earn from "./assets/sidebar-icons/earn.svg";
import home from "./assets/sidebar-icons/home.svg";
import launchpad from "./assets/sidebar-icons/launchpad.svg";
import transfer from "./assets/sidebar-icons/transfer.svg";
import wallet from "./assets/sidebar-icons/wallet.svg";
import Index from "./pages";
import Home from "./pages/home";
import PrivacyPolicy from "./pages/legal/privacy-policy";
import TermsConditions from "./pages/legal/terms";
import NotFound from "./pages/notfound";

const routes = [
	{
		path: "/",
		element: <Index />,
	},
	{
		path: "/legal/privacy-policy",
		element: <PrivacyPolicy />,
	},
	{
		path: "/legal/terms-conditions",
		element: <TermsConditions />,
	},
	{
		path: "/home",
		name: "Home",
		icon: home,
		element: (
			// <Sidebar>
			<PageRouteAnimation myKey="home">
				<Home />
			</PageRouteAnimation>
			// </Sidebar>
		),
	},
	{
		path: "*",
		element: (
			<Sidebar>
				<NotFound />
			</Sidebar>
		),
	},
	{
		path: "/portfolio",
		name: "Portfolio",
		icon: wallet,
		element: (
			<Sidebar>
				<PageRouteAnimation myKey="/portfolio">
					<NotFound />
				</PageRouteAnimation>
			</Sidebar>
		),
	},
	{
		path: "/swap",
		name: "Swap",
		icon: transfer,
		element: (
			<Sidebar>
				<PageRouteAnimation myKey="swap">
					<NotFound />
				</PageRouteAnimation>
			</Sidebar>
		),
	},
	{
		path: "/earn",
		name: "Earn",
		icon: earn,
		element: (
			<Sidebar>
				<PageRouteAnimation myKey="earn">
					<NotFound />
				</PageRouteAnimation>
			</Sidebar>
		),
	},
	{
		path: "/launchpad",
		name: "Launchpad",
		icon: launchpad,
		element: (
			<Sidebar>
				<NotFound />
			</Sidebar>
		),
	},
	{
		path: "settings",
		element: (
			<Sidebar>
				<PageRouteAnimation myKey="settngs">
					<NotFound />
				</PageRouteAnimation>
			</Sidebar>
		),
	},
];

export { routes };
