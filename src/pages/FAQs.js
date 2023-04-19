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
		<div className="index-container2">
			<div className="collapse-container">
				<br />
				<Tabs defaultActiveKey="1">
					<Tabs.TabPane tab="AMA question" key="1">
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
					<Tabs.TabPane tab="Custody questions" key="2">
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
	);
};

export default FAQs;
