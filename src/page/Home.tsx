import React from "react";
import { Layout, Button, Typography } from "antd";
import CarouselComponent from "../compoments/CarouselComponent";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  return (
    <Content className="text-center">
      <CarouselComponent />
      <div>
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
    </Content>
  );
};

export default Home;
