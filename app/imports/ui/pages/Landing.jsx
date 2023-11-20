import React from 'react';
import { Container, Carousel, Image } from 'react-bootstrap';

const Landing = () => {
  const body = document.body;
  body.style.backgroundColor = '#00000';
  return (
    <Container fluid className="my-auto text-center">
      <Carousel>
        <Carousel.Item className="w-150">
          <Image src="https://theunlikelybaker.com/wp-content/uploads/2016/05/Turon-Banana-Lumpia-Feature.jpg" text="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://christieathome.com/wp-content/uploads/2019/05/Kimchi-Fried-Rice-16.jpg" text="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://www.justonecookbook.com/wp-content/uploads/2021/10/Japanese-Chicken-Curry-3787-I-1.jpg" text="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://www.foodandwine.com/thmb/ENYQLnsTy3NmDhYkddQvVFiA5OM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-shoyu-musubi-XL-RECIPE2017-1edaba16f64441d3914da883f9c4e2bc.jpg" text="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Landing;
