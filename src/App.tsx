import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import { Layout } from 'antd';
import Contact from './page/Contact';
import AppFooter from './layouts/AppFooter';
import AppHeader from './layouts/AppHeader';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className="w-full h-full">
      <AppHeader />
      <Content>
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
