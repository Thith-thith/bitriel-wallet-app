import BFooter from "./Components/Layout/footer";
import { routes } from "./routes";
import "./styles/app.css";
import "./styles/global.css";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
	return (
		<BrowserRouter>
			<AnimatePresence>
				<Helmet>
					<meta charSet="utf-8" />
					<title>BITRIEL.COM</title>
					<link rel="canonical" href="https://bitriel.com" />
				</Helmet>
				‍
				<Routes>
					{routes.map((i) => (
						<Route key={i.path} path={i.path} element={i.element} />
					))}
				</Routes>
				<BFooter />
			</AnimatePresence>
		</BrowserRouter>
	);
}
