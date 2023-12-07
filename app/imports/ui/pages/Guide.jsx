import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Guide = () => (
  <Container fluid className="my-auto text-center">
    <h2>User Guide</h2>

    {/* Section: How to Add a Recipe */}
    <section>
      <h3>How to Add a Recipe</h3>
      <Row>
        <Col>
          <p>
            To add a new recipe to the website, follow these steps:
          </p>
          {/* Include an image for this step */}
          <img src="https://github.com/eat-sleep-fortnite-repeat/YUMMY-FOO/blob/issue-46/img/addrecipe_step1.jpg?raw=true" alt="Step 1" />
        </Col>
        <Col>
          {/* Include an image for this step */}
          <img src="https://github.com/eat-sleep-fortnite-repeat/YUMMY-FOO/blob/issue-46/img/addrecipe_step2.jpg?raw=true" alt="Step 2" />
          <p>
            Once you have filled in the details, click the submit button to submit your recipe.
          </p>
        </Col>
      </Row>
    </section>

    {/* Section: How to List Recipes */}
    <section>
      <h3>How to List Recipes</h3>
      <Row>
        <Col>
          <p>
            To view a list of recipes, navigate to the "List Recipes" page using the top navigation bar.
          </p>
          {/* Include an image for this step */}
          <img src="https://github.com/eat-sleep-fortnite-repeat/YUMMY-FOO/blob/issue-46/img/egg_fried_rice.jpg?raw=true" alt="List Recipes" />
        </Col>
      </Row>
    </section>

    {/* Add more sections for other features as needed */}
  </Container>
);

export default Guide;
