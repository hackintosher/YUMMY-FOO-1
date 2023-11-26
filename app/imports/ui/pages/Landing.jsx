import React from 'react';
import { Container, Carousel, Image, Row, Col } from 'react-bootstrap';

const Landing = () => {
  const body = document.body;
  body.style.backgroundColor = '#00000';
  return (
    <Container fluid className="my-auto text-center">
      <Carousel className="py-5" id="carousel">
        <Carousel.Item id="carousel-item">
          <Image src="https://theunlikelybaker.com/wp-content/uploads/2016/05/Turon-Banana-Lumpia-Feature.jpg" text="First slide" className="carousel-image" />
        </Carousel.Item>
        <Carousel.Item id="carousel-item">
          <Image src="https://christieathome.com/wp-content/uploads/2019/05/Kimchi-Fried-Rice-16.jpg" text="Second slide" className="carousel-image" />
        </Carousel.Item>
        <Carousel.Item id="carousel-item">
          <Image src="https://www.justonecookbook.com/wp-content/uploads/2021/10/Japanese-Chicken-Curry-3787-I-1.jpg" text="Third slide" className="carousel-image" />
        </Carousel.Item>
        <Carousel.Item className="carousel-image">
          <Image
            src="https://www.foodandwine.com/thmb/ENYQLnsTy3NmDhYkddQvVFiA5OM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-shoyu-musubi-XL-RECIPE2017-1edaba16f64441d3914da883f9c4e2bc.jpg"
            text="Fourth slide"
            className="carousel-image"
          />
        </Carousel.Item>
      </Carousel>
      <Row> <br /> </Row>
      <Container>
        <Row>
          <Col><Image src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVjaXBlfGVufDB8fDB8fHww" className="py-5" width="400px" /></Col>
          <Col>
            <div className="landing-blurb1 pe-5 fs-5">
              Yummy Foo is dedicated to setting up college students for success in the kitchen!
              <br />
              <br />
              With our continuously growing database of recipes our goal is to provide students with affordable and accessible meals within their time and skill range.
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="landing-blurb2 ps-5 fs-5">
              Students can browse through recipes provided by their fellow students and learn to cook new dishes!
              <br />
              <br />
              Please feel free to add in any of your own special recipes and secret techniques as well!
            </div>
          </Col>
          <Col><Image src="https://manoa.hawaii.edu/wp/wp-content/uploads/2017/09/uhm-students-courtyard-1024x597.jpg" className="py-5" width="400px" /></Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Landing;
