import React from "react";
import { Layout, Space } from "antd";
import logo from "./../../assets/BITRIEL.svg";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
	return (
		<Header className="navbar-background">
			<div className="navbar-container">
				<Link to="/">
					<img alt="logo" src={logo} className="logo-navbar" />
				</Link>
				<Space size={24}>
					<Link to="/about">
						<h2 className="about-header">About Us</h2>
					</Link>
					<Link to="/faq">
						<h2 className="about-header">FAQs</h2>
					</Link>
				</Space>
			</div>
		</Header>
	);
};

export default Navbar;
