import { Col, Layout, Row } from "antd";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import {
	FaFacebookF,
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaMediumM,
	FaTelegramPlane,
	FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const { Footer } = Layout;

const BFooter = () => {
	return (
		<React.Fragment>
			<Footer className="footer">
				<div className="index-container2">
					<img src="/assets/bitriel-2.png" className="logo-footer" />
					<Row gutter={[0, 24]}>
						<Col xs={12} sm={12} md={6} lg={6} xl={6}>
							<Col className="footer-head-info">Legal</Col>
							<Col className="sub-header-footer">
								<Link to="/legal/terms-conditions">
									<a>Terms & Conditions</a>
								</Link>
							</Col>
							<Col className="sub-header-footer">
								<Link to="/legal/privacy-policy">
									<a>Privacy Policy</a>
								</Link>
							</Col>
						</Col>
						<Col xs={12} sm={12} md={6} lg={6} xl={6}>
							<Col className="footer-head-info">Information</Col>
							<Col className="sub-header-footer">
								<a
									target="_blank"
									rel="noreferrer"
									href="https://github.com/bitriel"
								>
									Become a Contribute
								</a>
							</Col>
						</Col>
						<Col xs={12} sm={12} md={6} lg={6} xl={6}>
							<Col className="footer-head-info">Help</Col>
							<Col className="sub-header-footer">
								<a
									target="_blank"
									rel="noreferrer"
									href="https://t.me/s/selendrachainofficial"
								>
									Community
								</a>
							</Col>
						</Col>
						<Col xs={12} sm={12} md={6} lg={6} xl={6}>
							<Col className="footer-head-info">Connect With Us</Col>
							<Col className="sub-header-footer">
								<div className="social-media">
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.facebook.com/selendrachain"
									>
										<FaFacebookF />
									</a>

									<a
										target="_blank"
										rel="noreferrer"
										href="https://t.me/s/selendrachainofficial"
									>
										<FaTelegramPlane />
									</a>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://medium.com/selendra"
									>
										<FaMediumM />
									</a>

									<a
										target="_blank"
										rel="noreferrer"
										href="https://twitter.com/selendrachain"
									>
										<FaTwitter />
									</a>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://github.com/bitriel"
									>
										<FaGithub />
									</a>
								</div>
								<p style={{ fontSize: "10px" }}>
									Selendra &copy; 2022 All Rights Reserved.
								</p>
							</Col>
						</Col>
					</Row>
				</div>
			</Footer>
		</React.Fragment>
	);
};

export default BFooter;
