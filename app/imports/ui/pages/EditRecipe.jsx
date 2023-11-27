// EditRecipe.jsx
import React, { useState } from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import PropTypes from 'prop-types';
import { Recipes } from '../../api/recipes/Recipes';

const bridge = new SimpleSchema2Bridge(Recipes.schema);

const EditRecipe = ({ recipe, onClose, handleUpdateRecipe }) => {
  const [formData, setFormData] = useState(recipe);

  const submit = () => {
    const { _id, name, image, time, cost, filter, appliances, ingredients, recipe } = formData;

    // Update the local state (formData)
    handleUpdateRecipe(_id, { name, image, time, cost, filter, appliances, ingredients, recipe });

    // Display success message
    swal('Success', 'Recipe updated successfully', 'success');
    onClose();
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
            {/* ... (rest of the form) */}
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

EditRecipe.propTypes = {
  recipe: PropTypes.any.isRequired,
  onClose: PropTypes.func.isRequired,
  handleUpdateRecipe: PropTypes.func.isRequired, // Add the handleUpdateRecipe prop
};

export default EditRecipe;
