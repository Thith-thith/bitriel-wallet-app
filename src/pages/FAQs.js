import React from "react";
import { Collapse, Tabs } from "antd";
import {
	CaretRightOutlined,
	PlusOutlined,
	MinusOutlined,
} from "@ant-design/icons";
import ama from "./api/ama.json";
import custody from "./api/custody.json";
import ramp from "./api/ramp.json";
import parse from "html-react-parser";

const { Panel } = Collapse;

const FAQs = () => {
	return (
		<>
			<div className="faq-banner">
				<svg
					width="2092"
					height="377"
					viewBox="0 0 2092 377"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0 377H116C232 377 465 377 697 345C930 314 1162 251 1395 241C1627 230 1860 272 1976 293L2092 314V0H1976C1860 0 1627 0 1395 0C1162 0 930 0 697 0C465 0 232 0 116 0H0V377Z"
						fill="url(#paint0_linear_441_81)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_441_81"
							x1="-6.15115e-06"
							y1="189"
							x2="2107.5"
							y2="189"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#F39B0B" />
							<stop offset="1" stop-color="#F37747" />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<div className="index-container2">
				<div className="collapse-container">
					<h1 className="faq-banner-header">Frenquetly asked qeustions</h1>
					<br />
					<Tabs defaultActiveKey="1">
						<Tabs.TabPane tab="General" key="1">
							<Collapse
								ghost
								bordered={false}
								defaultActiveKey={["0"]}
								expandIcon={({ isActive }) => (
									<CaretRightOutlined rotate={isActive ? 90 : 0} />
								)}
								expandIconPosition="end"
								className="site-collapse-custom-collapse"
							>
								{ama?.map((res, index) => (
									<Panel
										header={<h2 className="faq-header">{res.header}</h2>}
										key={index}
										className="site-collapse-custom-panel"
									>
										<p className="panel-faq">{parse(res.panel)}</p>
									</Panel>
								))}
							</Collapse>
						</Tabs.TabPane>
						<Tabs.TabPane tab="Custody" key="2">
							<Collapse
								ghost
								bordered={false}
								defaultActiveKey={["0"]}
								expandIcon={({ isActive }) => (
									<CaretRightOutlined rotate={isActive ? 90 : 0} />
								)}
								expandIconPosition="end"
								className="site-collapse-custom-collapse"
							>
								{custody?.map((res, index) => (
									<Panel
										header={<h2 className="faq-header">{res.header}</h2>}
										key={index}
										className="site-collapse-custom-panel"
									>
										<p className="panel-faq">{parse(res.panel)}</p>
									</Panel>
								))}
							</Collapse>
						</Tabs.TabPane>
						<Tabs.TabPane tab="On/Off ramp" key="3">
							<Collapse
								ghost
								bordered={false}
								defaultActiveKey={["0"]}
								expandIcon={({ isActive }) => (
									<CaretRightOutlined rotate={isActive ? 90 : 0} />
								)}
								expandIconPosition="end"
								className="site-collapse-custom-collapse"
							>
								{ramp?.map((res, index) => (
									<Panel
										header={<h2 className="faq-header">{res.header}</h2>}
										key={index}
										className="site-collapse-custom-panel"
									>
										<p className="panel-faq">{parse(res.panel)}</p>
									</Panel>
								))}
							</Collapse>
						</Tabs.TabPane>
					</Tabs>
				</div>
				<br />
				<br />
				<br />
			</div>
		</>
	);
};

export default FAQs;
