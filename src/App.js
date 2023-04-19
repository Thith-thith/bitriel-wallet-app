import BFooter from "./Components/Layout/footer";
import { routes } from "./routes";
import "./styles/app.css";
import "./styles/global.css";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Layout/navbar";
import { Layout } from "antd";

const { Content } = Layout;

export default function App() {
	return (
		<BrowserRouter>
			<AnimatePresence>
				<Helmet>
					<meta charSet="utf-8" />
					<title>BITRIEL.COM</title>
					<link rel="canonical" href="https://bitriel.com" />
					<link
						rel="stylesheet"
						type="text/css"
						href="https://letsexchange.io/widget_lets.css"
					/>
					<script src="https://letsexchange.io/init_widget.js" />
				</Helmet>
				‍
				<Layout>
					<Navbar />
					<Content>
						<Routes>
							{routes.map((i) => (
								<Route key={i.path} path={i.path} element={i.element} />
							))}
						</Routes>
					</Content>
					<BFooter />
				</Layout>
			</AnimatePresence>
		</BrowserRouter>
	);
}
