import React, { useRef } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Meteor } from 'meteor/meteor';
import swal from 'sweetalert';
import { Recipes } from '../../api/recipes/Recipes';
import { RecipeImages } from '../../api/recipes/RecipeImages';

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
  image: {
    type: String,
    optional: true,
  },
  imageId: { type: String, optional: true },
});

const bridge = new SimpleSchema2Bridge(formSchema);

const AddStuff = () => {
  const fRef = useRef();
  const submit = (data) => {
    const { name, recipe, time, cost, ingredients, appliances, image, dietary } = data;
    const owner = Meteor.user().username;
    const imageFile = fRef?.current?.imageFile?.files[0]; // Assuming file input has a ref="imageFile"
    const imageId = imageFile ? RecipeImages.insert(imageFile) : null;
    Recipes.collection.insert(
      { name, recipe, time, cost, ingredients, appliances, dietary, image, imageId, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          fRef.reset();
        }
      },
    );
  };
  return (
    <Container id="add-recipe-page" className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center"><h2 className="text-white">Add Recipe</h2></Col>
          <AutoForm ref={fRef} schema={bridge} onSubmit={data => submit(data)}>
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
                  <Form.Label>Attach Image or URL of Dish</Form.Label>
                  {/* eslint-disable-next-line no-unused-expressions */}
                  <Form.Control type="file" ref={ref => { fRef && (fRef.imageFile = ref); }} />
                </Form.Group>
                <LongTextField label="" name="image" placeholder="URL of image" />
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
