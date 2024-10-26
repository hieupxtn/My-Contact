import React from "react";
import { Layout, Row, Col, Button, Card, Typography } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  return (
    <Content className="p-10 text-center h-full">
      <div className="mb-10">
        <Title level={1} className="text-4xl font-bold text-gray-800">
          Welcome to My Website
        </Title>
        <Paragraph className="text-lg text-gray-600 mb-4">
          Discover the best services and features we offer to help you achieve
          your goals.
        </Paragraph>
        <Button
          type="primary"
          size="large"
          className="bg-blue-600 hover:bg-blue-500"
        >
          Get Started
        </Button>
      </div>

      <Row gutter={16} className="flex justify-center">
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Feature 1"
            bordered={false}
            className="bg-white shadow-lg rounded-lg mb-6 p-4"
          >
            <p>
              Explore this amazing feature that helps you streamline your tasks
              efficiently.
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Feature 2"
            bordered={false}
            className="bg-white shadow-lg rounded-lg mb-6 p-4"
          >
            <p>
              Our feature helps in boosting your productivity and enhancing your
              experience.
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Feature 3"
            bordered={false}
            className="bg-white shadow-lg rounded-lg mb-6 p-4"
          >
            <p>
              Get insights and analysis with our advanced tools and make
              informed decisions.
            </p>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default Home;
