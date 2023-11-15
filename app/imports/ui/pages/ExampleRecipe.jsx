import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ExampleRecipe = () => {
  const body = document.body;
  body.style.background = 'url("https://github.com/aidenlkw/publicimages/raw/e4d6e1945ec72f3e9bb97e27ddd2ebc7e1b64388/Runway%202023-11-13T20_37_49.641Z%20Upscale%20Image%20Upscaled%20Image%203409%20x%201920.jpg") center center/cover no-repeat';

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Example Recipe</h2></Col>
          <Card>
            <Card.Img variant="top" src="https://raw.githubusercontent.com/eat-sleep-fortnite-repeat/YUMMY-FOO/main/yummy-foo-logo-cropped.png" height="400px" />
            <Card.Body>
              <Row>
                <Col>
                  <Row><Card.Title>Recipe Name</Card.Title></Row>
                  <Row>
                    <Col><Card.Text>Ingrediants and Appliances</Card.Text></Col>
                    <Col><Card.Text>Restrictions</Card.Text></Col>
                    <Col><Card.Text>Cost Per Serving</Card.Text></Col>
                    <Col><Card.Text>Time</Card.Text></Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col><Card.Text>Recipe</Card.Text></Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ExampleRecipe;
