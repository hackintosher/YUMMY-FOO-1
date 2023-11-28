import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, NumField, SubmitField, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';

const formSchema = new SimpleSchema({
  recipeName: String,
  recipeInstruction: String,
  time: Number,
  cost: Number,
});

const bridge = new SimpleSchema2Bridge(formSchema);
const AddStuff = () => (
  <Container id="add-recipe-page" className="py-3">
    <Row className="justify-content-center">
      <Col>
        <Col className="text-center"><h2 className="text-white">Add Recipe</h2></Col>
        <AutoForm schema={bridge}>
          <Card>
            <Card.Body>
              <Row>
                <Col><TextField name="recipeName" label="Recipe Name" /></Col>
                <Col><NumField name="time" label="Estimated Time" decimal={1} /></Col>
                <Col><NumField name="cost" label="Estimated Cost" decimal={1} /></Col>
              </Row>
              <LongTextField name="recipeInstruction" label="Recipe" />
              <Row>
                <Col><LongTextField name="recipeInstruction" label="List Ingredients Needed" /></Col>
                <Col><LongTextField name="recipeInstruction" label="List Appliances Needed" /></Col>
              </Row>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Attach Image of Dish</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form>
                <div key="default-checkbox" className="mb-3">
                  Dietary Stuff
                  <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    label="Dairy-Free"
                  />
                  <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    label="Vegan"
                  />
                  <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    label="Gluten-Free"
                  />
                  <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    label="Vegetarian"
                  />
                </div>
              </Form>
              <SubmitField value="Submit" className="text-center" />
              <ErrorsField />
            </Card.Body>
          </Card>
        </AutoForm>
      </Col>
    </Row>
  </Container>
);

export default AddStuff;
