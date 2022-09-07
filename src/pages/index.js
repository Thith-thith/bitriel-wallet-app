import { Row, Col } from 'antd';
import React from 'react';
import { Button } from '../Components/globalComponents';
// import logoWhite from '../assets/BITRIEL.svg';
import logoWhite from '../assets/BITRIEL.svg';
import bitrileLogo from '../assets/bitriel-logo.png';
import bitrileMockup from '..//assets/bitriels.png';
import createWallet from '../assets/icons/create-wallet-white.svg';
import restoreWallet from '../assets/icons/restore-white.svg';
import android from '../assets/icons/android.svg';
import apple from '../assets/icons/apple.svg';
import mobile from '../assets/bitriel-3.svg';
import selTransparent from '../assets/SEL-coin-transparent.png';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div className="index-wrapper">
      <div className="index-top-section">
        <div className="index-container">
          <img src={logoWhite} alt="" className="logo" />
          <Row>
            <Col xs={24} sm={24} md={18} lg={18} xl={18} xxl={18}>
              <img src={selTransparent} alt="" className="coin-transparent" />
              <div className="welcome">
                <div className="welcome-message">Bitriel Wallet</div>
                <h4 className="welcome-sub-message">
                  Digital wallet management for cross-chain assets, staking and
                  governance operations, collection and self-owned private key.
                </h4>
                <div className="create-restore-buttons">
                  <Row gutter={[15, 15]}>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
                      <Button.Third large block>
                        <Link to="/home">
                          <img
                            src={createWallet}
                            style={{ color: '#FFF' }}
                            alt=""
                            className="create-wallet-img"
                          />
                          Create Wallet
                        </Link>
                      </Button.Third>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
                      <Button.Third large block>
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
            <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
              <img src={mobile} alt="bitriel app" className="bitriel-mock-up" />
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
                style={{ marginRight: '20px' }}
              />
              <h1 className="welcome-message">Get started with Bitriel</h1>
            </div>
            <h3>
              The SELENDRA Bitriel Wallet has been created as a Progressive Web
              App (PWA) which is easy to launch on all platforms:{' '}
            </h3>
            <br />

            <Row gutter={[18, 18]} justify="space-between">
              <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <Button.Accent medium block>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://play.google.com/store/search?q=bitriel&c=apps"
                  >
                    <img src={android} alt="" height="30px" />
                    Android
                  </a>
                </Button.Accent>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <Button.Accent medium block>
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

      <div className="index-container2">
        <Row className="index-footer" align="middle">
          <Col>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/selendrachain"
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="http://t.me/selendrachainofficial/193"
            >
              <i className="ri-telegram-fill"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/selendrachain"
            >
              <i className="ri-twitter-fill"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://kh.linkedin.com/company/selendrachain"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://medium.com/selendra"
            >
              <i className="ri-medium-fill"></i>
            </a>
          </Col>
          <Col>
            <p>2022 © Selendra, Blockchain</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
