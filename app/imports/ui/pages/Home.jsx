// components/HomePage.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => (
  <Container>
    <h1>Favorites</h1>
    <Row className="mt-2">
      <Col xs={1}>
        <Link to="/search">
          <Button variant="primary" block>
            Search
          </Button>
        </Link>
      </Col>
      <Col xs={1}>
        <Link to="/add-recipe">
          <Button variant="primary" block>
            Add Recipe
          </Button>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <Link to="/burger">
            <Card.Img variant="top" src="https://www.foodiesfeed.com/wp-content/uploads/2023/04/cheeseburger.jpg" style={{ height: '400px', objectFit: 'cover' }} />
          </Link>
          <Card.Body>
            <Link to="/burger">
              <Card.Title>Burger</Card.Title>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Link to="/pancakes">
            <Card.Img variant="top" src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg" style={{ height: '400px', objectFit: 'cover' }} />
          </Link>
          <Card.Body>
            <Link to="/pancakes">
              <Card.Title>Pancakes</Card.Title>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Link to="/tacos">
            <Card.Img variant="top" src="https://www.preparedfoodphotos.com/wp-content/uploads/Tacos_1109-6-500x333.jpg" style={{ height: '400px', objectFit: 'cover' }} />
          </Link>
          <Card.Body>
            <Link to="/tacos">
              <Card.Title>Tacos</Card.Title>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Home;
