import {Layout, Menu, Breadcrumb} from 'antd';
import "antd/dist/antd.css";

const {Header, Content, Footer} = Layout;

export default function App() {
  return (
    <div className="App">
      <Layout className="layout">
          <Header>
              <div className="logo">
                  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                      <Menu.Item key="1">HOME</Menu.Item>
                  </Menu>
              </div>
          </Header>
          <Content style={{padding: '0 50px'}}>
              <div className="site-layout-content">

              </div>

          </Content>
          <Footer style={{textAlign: 'center'}}>
              eVaccine - Fullstack Week <a href="https://larissafalcao.com.br/"> https://larissafalcao.com.br/</a>
          </Footer>

      </Layout>
    </div>
  );
}


