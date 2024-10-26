import React from "react";
import { Carousel } from "antd";

const CarouselComponent: React.FC = () => {
  return (
    <Carousel className="h-[800px] w-full" autoplay>
      <div className="flex justify-center items-center h-[800px]">
        <img 
          alt="Slide 1"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-center items-center h-[800px]">
        <img 
          alt="Slide 1" 
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-center items-center h-[800px]">
        <img 
          alt="Slide 1" 
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-center items-center h-[800px]">
        <img 
          alt="Slide 1" 
          className="object-cover w-full h-full"
        />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
