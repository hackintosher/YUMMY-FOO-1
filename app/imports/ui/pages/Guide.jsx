import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Guide = () => (
  <Container className="my-auto text-center">
    <h2>User Guide</h2>

    {/* Section: How to Add a Recipe */}
    <section>
      <h3>How to Add a Recipe</h3>
      <Container>
        <Row>
          <Col>
            <p>
              To add a new recipe to the website, follow these steps:
            </p>
            <div>
              <h4>Step 1</h4>
              <p>
                Click the Add Recipe button
              </p>
              <img src="https://github.com/eat-sleep-fortnite-repeat/YUMMY-FOO/blob/issue-46/img/addrecipe_step1.jpg?raw=true" alt="Step 1" style={{ maxWidth: '100%', marginBottom: '10px' }} />
            </div>
            <div>
              <h4>Step 2</h4>
              <p>
                Fill out the form and press the submit button to submit your recipe.
              </p>
              <img src="https://github.com/eat-sleep-fortnite-repeat/YUMMY-FOO/blob/issue-46/img/addrecipe_step2.jpg?raw=true" alt="Step 2" style={{ maxWidth: '100%' }} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Section: How to List Recipes */}
    <section>
      <h3>How to Search for a Recipe</h3>
      <Container>
        <Row>
          <Col>
            <p>
              To search for a recipe, follow these steps:
            </p>
            <div>
              <h4>Step 1</h4>
              <p>
                Click the Search button
              </p>
              <img src="https://github.com/eat-sleep-fortnite-repeat/YUMMY-FOO/blob/issue-46/img/search_step1.jpg?raw=true" alt="Step 1" style={{ maxWidth: '100%', marginBottom: '10px' }} />
            </div>
            <div>
              <h4>Step 2</h4>
              <p>
                Type in the search box anything you would like to search - ingredients, name, appliances, etc
              </p>
              <img src="https://github.com/eat-sleep-fortnite-repeat/YUMMY-FOO/blob/issue-46/img/search_step2.jpg?raw=true" alt="Step 2" style={{ maxWidth: '100%' }} />
            </div>
            <div>
              <h4>Step 3</h4>
              <p>
                Reset your filters by pressing the reset search button
              </p>
              <img src="https://github.com/eat-sleep-fortnite-repeat/YUMMY-FOO/blob/issue-46/img/search_step3.jpg?raw=true" alt="Step 3" style={{ maxWidth: '100%' }} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <h3>How to Add a Recipe</h3>
      <Container>
        <Row>
          <Col>
            <p>
              To add a new recipe to the website, follow these steps:
            </p>
            <div>
              <h4>Step 1</h4>
              <img src="https://github.com/eat-sleep-fortnite-repeat/YUMMY-FOO/blob/issue-46/img/addrecipe_step1.jpg?raw=true" alt="Step 1" style={{ maxWidth: '100%', marginBottom: '10px' }} />
            </div>
            <div>
              <h4>Step 2</h4>
              <img src="https://github.com/eat-sleep-fortnite-repeat/YUMMY-FOO/blob/issue-46/img/addrecipe_step2.jpg?raw=true" alt="Step 2" style={{ maxWidth: '100%' }} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <h3>How to Add a Recipe</h3>
      <Container>
        <Row>
          <Col>
            <p>
              To add a new recipe to the website, follow these steps:
            </p>
            <div>
              <h4>Step 1</h4>
              <img src="https://github.com/eat-sleep-fortnite-repeat/YUMMY-FOO/blob/issue-46/img/addrecipe_step1.jpg?raw=true" alt="Step 1" style={{ maxWidth: '100%', marginBottom: '10px' }} />
            </div>
            <div>
              <h4>Step 2</h4>
              <img src="https://github.com/eat-sleep-fortnite-repeat/YUMMY-FOO/blob/issue-46/img/addrecipe_step2.jpg?raw=true" alt="Step 2" style={{ maxWidth: '100%' }} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Add more sections for other features as needed */}
  </Container>
);

export default Guide;
