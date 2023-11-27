import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Meteor } from 'meteor/meteor';
import swal from 'sweetalert';
import { Recipes } from '../../api/recipes/Recipes';

const formSchema = new SimpleSchema({
  name: String,
  recipe: String,
  time: String,
  cost: String,
  ingredients: String,
  appliances: String,
  dietary: {
    type: Array,
    optional: true,
  },
  'dietary.$': {
    type: String,
    allowedValues: ['Dairy-Free', 'Vegan', 'Gluten-Free', 'Vegetarian'],
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);
const AddStuff = () => {
  const submit = (data, formRef) => {
    const { recipe, time, cost, ingredients, appliances, dietary } = data;
    const owner = Meteor.user().username;
    Recipes.collection.insert(
      { recipe, time, cost, ingredients, appliances, dietary, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      },
    );
  };
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center"><h2 className="text-white">Add Recipe</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <Row>
                  <Col><TextField name="name" label="Recipe Name" /></Col>
                  <Col><TextField name="time" label="Estimated Time" /></Col>
                  <Col><TextField name="cost" label="Estimated Cost" /></Col>
                </Row>
                <LongTextField name="recipe" label="Recipe" />
                <Row>
                  <Col><LongTextField name="ingredients" label="List Ingredients Needed" /></Col>
                  <Col><LongTextField name="appliances" label="List Appliances Needed" /></Col>
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
                      id="dairyFree"
                      name="dietary"
                      label="Dairy-Free"
                      value="Dairy-Free"
                    />
                    <Form.Check
                      type="checkbox"
                      id="vegan"
                      name="dietary"
                      label="Vegan"
                      value="Vegan"
                    />
                    <Form.Check
                      type="checkbox"
                      id="glutenFree"
                      name="dietary"
                      label="Gluten-Free"
                      value="Gluten-Free"
                    />
                    <Form.Check
                      type="checkbox"
                      id="vegetarian"
                      name="dietary"
                      label="Vegetarian"
                      value="Vegetarian"
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
};

export default AddStuff;
