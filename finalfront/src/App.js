import React from 'react';
import './App.css';
import { Layout, Avatar, Menu, Breadcrumb } from 'antd';
import Title from 'antd/lib/typography/Title';
import MenuItem from 'antd/lib/menu/MenuItem';
import SubMenu from 'antd/lib/menu/SubMenu';
import Icon from '@ant-design/icons';


const { Header, Footer, Sider, Content } = Layout;



function App() {
  return (
    <div className="App">
      <Layout>
        <Header style = {{padding: 10}}>
          <Title level={3}>Client Web Portal</Title>
          <Avatar style = {{float: 'right'}} icon = "user" />
        </Header>
        <Layout>
          <Sider>
            <Menu defaultSelectedKeys = {['Dashboard']} mode = "inline">
              <MenuItem>
                Dashboard
              </MenuItem>
              <SubMenu title={
                <span>
                  <Icon  type = "MailOutlined" />
                  <span>Purchases</span>
                  </span>
                }>
                <Menu.ItemGroup key = "Purchases" title = "Purchases Menu">
                    <Menu.Item key = "Orders">View Orders</Menu.Item>
                   
                </Menu.ItemGroup>
              </SubMenu>
            </Menu> 
          </Sider>
        <Layout>
          <Content>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Registration</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                
                <div style = {{background: '#fff', padding: 24, minHeight: 100}}> </div>
              </Breadcrumb>
              
             <div style = {{background: '#fff', padding: 24, minHeight: 580}}> </div>
            </Content>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
