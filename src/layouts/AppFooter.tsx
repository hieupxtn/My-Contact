// src/Footer.tsx

import React from 'react';
import { Layout, Row, Col  } from 'antd';

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  return (
    <Footer style={{ backgroundColor: '#001529', color: '#ffffff', padding: '20px 0' }}>
      <Row justify="center" align="middle">
        <Col span={6}>
        </Col>
        <Col span={6}>
          <h4 style={{ color: '#ffffff' }}>About Us</h4>
          <p style={{ color: '#ffffff' }}>Learn more about our company and services.</p>
        </Col>
        <Col span={6}>
          <h4 style={{ color: '#ffffff' }}>Contact</h4>
          <p style={{ color: '#ffffff' }}>Email: hieupxtn@gmail.com</p>
          <p style={{ color: '#ffffff' }}>Phone: 0328 058 287</p>
        </Col>
        <Col span={6}>
          <h4 style={{ color: '#ffffff' }}>Follow Us</h4>
          <p style={{ color: '#ffffff' }}>Facebook | Twitter | LinkedIn</p>
        </Col>
      </Row>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p style={{ color: '#ffffff' }}>© 2024 Your Company. All rights reserved.</p>
      </div>
    </Footer>
  );
};

export default AppFooter;
