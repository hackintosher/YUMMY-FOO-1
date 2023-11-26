import React, { useState } from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import PropTypes from 'prop-types';
import { Recipes } from '../../api/recipes/Recipes';

const bridge = new SimpleSchema2Bridge(Recipes.schema);

const EditRecipe = ({ recipe, onClose }) => {
  const [formData, setFormData] = useState(recipe);

  const submit = () => {
    // eslint-disable-next-line no-shadow
    const { _id, name, image, time, cost, filter, appliances, ingredients, recipe } = formData;

    Recipes.collection.update(_id, {
      $set: {
        name,
        image,
        time,
        cost,
        filter,
        appliances,
        ingredients,
        recipe,
      },
    }, (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'Recipe updated successfully', 'success');
        onClose();
      }
    });
  };

  const handleFieldChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center"><h2 className="text-white">Edit Recipe</h2></Col>
          <AutoForm schema={bridge} onSubmit={submit} model={formData}>
            <Card>
              <Card.Body>
                <Row>
                  <Col><TextField name="name" label="Recipe Name" onChange={(value) => handleFieldChange('name', value)} /></Col>
                  <Col><TextField name="image" label="Image URL" onChange={(value) => handleFieldChange('image', value)} /></Col>
                  <Col><TextField name="time" label="Time" onChange={(value) => handleFieldChange('time', value)} /></Col>
                  <Col><TextField name="cost" label="Cost" onChange={(value) => handleFieldChange('cost', value)} /></Col>
                </Row>
                <LongTextField name="recipe" label="Recipe" onChange={(value) => handleFieldChange('recipe', value)} />
                <Row>
                  <Col><LongTextField name="ingredients" label="Ingredients" onChange={(value) => handleFieldChange('ingredients', value)} /></Col>
                  <Col><LongTextField name="appliances" label="Appliances" onChange={(value) => handleFieldChange('appliances', value)} /></Col>
                </Row>
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

EditRecipe.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  recipe: PropTypes.any.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditRecipe;
