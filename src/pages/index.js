import bitrileMockup from "../assets/bitriels.png";
import { Button } from "../Components/globalComponents";
// import logoWhite from '../assets/BITRIEL.svg';
import logoWhite from "../assets/BITRIEL.svg";
import selTransparent from "../assets/SEL-coin-transparent.png";
import bitrileLogo from "../assets/bitriel-logo.png";
import bitrielMarket from "../assets/bitriel-market-4.png";
import android from "../assets/icons/android.svg";
import apple from "../assets/icons/apple.svg";
import createWallet from "../assets/icons/create-wallet-white.svg";
import restoreWallet from "../assets/icons/restore-white.svg";
import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
	return (
		<div className="index-wrapper">
			<div className="index-top-section">
				<div className="index-container">
					{/* <img src={logoWhite} alt="" className="logo" /> */}
					<Row>
						<Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
							<img src={selTransparent} alt="" className="coin-transparent" />
							<div className="welcome">
								<h4 className="welcome-sub-message">
									Bitriel is a self-custody digital wallet that supports
									cross-chain multi-assets, including crypto assets and NFTs
								</h4>
								<div className="create-restore-buttons">
									<Row gutter={[15, 15]}>
										<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
											<Button.Third large={true} block={true}>
												<Link to="/home">
													<img
														src={createWallet}
														style={{ color: "#FFF" }}
														alt=""
														className="create-wallet-img"
													/>
													Create Wallet
												</Link>
											</Button.Third>
										</Col>
										<Col span={12}>
											<Button.Third large={true} block={true}>
												<img
													src={restoreWallet}
													alt=""
													className="create-wallet-img"
												/>
												Restore Wallet
											</Button.Third>
										</Col>
									</Row>
								</div>
							</div>
						</Col>
						<Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
							{/* <img src={mobile} alt="bitriel app" className="bitriel-mock-up" /> */}
							<div className="lets-widget" id="lets_widget_kn0jXoqXjWt8TYid">
								<iframe
									className=" widget-plugin "
									src="https://letsexchange.io/v2/widget?affiliate_id=kn0jXoqXjWt8TYid&is_iframe=true"
									width="100%"
									height="100%"
									frameBorder="0"
									allow="clipboard-read; clipboard-write"
								/>
							</div>
						</Col>
					</Row>
				</div>
			</div>

			<div className="index-container2">
				<div className="apps-section">
					<div className="apps-title-container">
						<div className="apps-title">
							<img
								src={bitrileLogo}
								alt="bitriel logo"
								height={40}
								style={{ marginRight: "20px" }}
							/>
							<h1 className="welcome-message">Get started with Bitriel</h1>
						</div>
						<h3>
							The SELENDRA Bitriel Wallet has been created as a Progressive Web
							App (PWA) which is easy to launch on all platforms:{" "}
						</h3>
						<br />

						<Row gutter={[18, 18]} justify="space-between">
							<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
								<Button.Accent medium={true} block={true}>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://play.google.com/store/apps/details?id=com.selendra.secure_wallet"
									>
										<img src={android} alt="" height="30px" />
										Android
									</a>
								</Button.Accent>
							</Col>
							<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
								<Button.Accent medium={true} block={true}>
									<img src={apple} alt="" height="30px" />
									IOS
								</Button.Accent>
							</Col>
						</Row>
					</div>

					<img
						src={bitrileMockup}
						alt="bitriel app"
						className="bitriels-apps"
					/>
				</div>
			</div>

			<div className="black-background">
				<div className="index-container ">
					<center>
						<h1 className="bitriel-market-place">MARKET</h1>
						<h1 className="market-title">Trade Crypto Decentralized</h1>
					</center>
					<Row gutter={24}>
						<Col xs={24} sm={24} md={12} lg={12} xl={10} xxl={10}>
							<h4 className="welcome-sub-message-2">
								Bitriel also offers a decentralized exchange, fiat/crypto onramp
								and offramp, an NFT marketplace, and event tickets for cultural
								sites and travel industry.
							</h4>
							<div class="container2">
								<a
									href="https://market.bitriel.com/"
									target="_blank"
									rel="noreferrer"
									class="btn"
								>
									<svg width="277" height="62">
										<defs>
											<linearGradient id="grad1">
												<stop offset="0%" stop-color="#FF8282" />
												<stop offset="100%" stop-color="#E178ED" />
											</linearGradient>
										</defs>
										<rect
											x="5"
											y="5"
											rx="25"
											fill="none"
											stroke="url(#grad1)"
											width="266"
											height="50"
										/>
									</svg>

									<span>trade here</span>
								</a>
							</div>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12} xl={14} xxl={14}>
							<img src={bitrielMarket} alt="" className="bitriel-market-img" />
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
}
