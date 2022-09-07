import { Layout } from 'antd';
import Sidebar from './Sidebar';

const { Footer, Content } = Layout;

export default function LayoutComponent({ children }) {
  return (
    <Layout hasSider>
      <Sidebar />
      <Layout>
        <Content>
          <div className="wrapper">
            <div className="wrapper-sub-background">
              <div className="container">{children}</div>
            </div>
          </div>
        </Content>
        <Footer style={{ background: '#fff' }}>
          <center>
            <p>
              Build with &#10084;&#65039; <b>SELENDRA</b>
            </p>
          </center>
        </Footer>
      </Layout>
    </Layout>
  );
}
