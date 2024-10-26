import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const AppHeader: React.FC= () => {
  const location = useLocation();

  return (
      <Header>
        <Menu theme="dark" mode="horizontal" className='justify-center' selectedKeys={[location.pathname]}>
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Header>
  );
};

export default AppHeader;
