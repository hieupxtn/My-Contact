import React from 'react';
import { Button, Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Layout className='h-screen'>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px' }}>
        <h1 className="text-center">Welcome to Ant Design with React!</h1>
        <Button type="primary">Click Me</Button>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2024 Created by You</Footer>
    </Layout>
  );
};

export default App;
