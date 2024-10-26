import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './compoments/Home';
import About from './compoments/About';
import { Layout } from 'antd';
import Contact from './compoments/Contact';
import AppFooter from './layouts/AppFooter';
import AppHeader from './layouts/AppHeader';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className="w-screen h-screen">
      <AppHeader />
      <Content style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default App;
