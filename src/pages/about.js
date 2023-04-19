import React from "react";
import { Row, Col } from "antd";
import { Button } from "../Components/globalComponents";
import selTransparent from "../assets/SEL-coin-transparent.png";
import mobile from "../assets/bitriel-3.svg";

const About = () => {
	return (
		<div className="index-top-section">
			<div className="about-container">
				{/* <img src={logoWhite} alt="" className="logo" /> */}
				<Row>
					<Col xs={24} sm={24} md={18} lg={18} xl={18} xxl={18}>
						<img src={selTransparent} alt="" className="coin-transparent" />
						<div>
							<p className="welcome-sub-message-3">
								Bitriel is a self-custody digital wallet that supports
								cross-chain multi-assets, including crypto assets and NFTs. Its
								decentralized platform offers a range of services including
								multi-chain wallet management, token swapping, project launchpad
								and investor rewards. It provides a secure and convenient way
								for users to manage their digital assets across different
								blockchains.
							</p>

							<p className="welcome-sub-message-3">
								It’s built using Polkadot SDK and is designed to work with the
								Selendra ecosystem, a substrate based blockchain development
								framework technology and gives users control over cross-chain
								operations, staking, governance, and private key ownership.
							</p>

							<p className="welcome-sub-message-3">
								In addition to being a multi-asset digital wallet, Bitriel also
								offers a decentralized exchange, fiat/crypto onramp and offramp,
								an NFT marketplace, and event tickets for cultural sites and
								travel industry. These features are designed to enhance users’
								experience and onboard them to blockchain technology.
							</p>
						</div>
					</Col>
					<Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
						<img
							src={mobile}
							alt="bitriel app"
							className="bitriel-mock-up-about"
						/>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default About;
